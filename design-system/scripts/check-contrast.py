#!/usr/bin/env python3
"""Verify every ACME colour pairing against WCAG AA.

Resolves the semantic tokens straight out of tokens/acme.css (including the
color-mix() soft tokens) and checks the pairings the components actually
render, in both themes. Exits non-zero if any pairing regresses, so the
ratios published in foundations/color.md can't drift from the tokens.

    design-system/scripts/check-contrast.py [--all]

Thresholds follow WCAG 2.2: 4.5:1 for normal-size text (1.4.3) and 3:1 for
user-interface component boundaries and meaningful graphics (1.4.11).
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS = open(os.path.join(ROOT, 'tokens', 'acme.css')).read()

T_TEXT, T_UI = 4.5, 3.0


# ---------------------------------------------------------------- colour math
def _hex2rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))


def _lin(c):
    c /= 255
    return c/12.92 if c <= 0.04045 else ((c+0.055)/1.055)**2.4


def luminance(h):
    r, g, b = _hex2rgb(h)
    return 0.2126*_lin(r) + 0.7152*_lin(g) + 0.0722*_lin(b)


def ratio(a, b):
    la, lb = luminance(a), luminance(b)
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def _rgb2oklab(h):
    r, g, b = [_lin(v) for v in _hex2rgb(h)]
    l = 0.4122214708*r + 0.5363325363*g + 0.0514459929*b
    m = 0.2119034982*r + 0.6806995451*g + 0.1073969566*b
    s = 0.0883024619*r + 0.2817188376*g + 0.6299787005*b
    l_, m_, s_ = (v ** (1/3) if v > 0 else 0 for v in (l, m, s))
    return (0.2104542553*l_ + 0.7936177850*m_ - 0.0040720468*s_,
            1.9779984951*l_ - 2.4285922050*m_ + 0.4505937099*s_,
            0.0259040371*l_ + 0.7827717662*m_ - 0.8086757660*s_)


def _oklab2hex(L, a, b_):
    l = (L + 0.3963377774*a + 0.2158037573*b_) ** 3
    m = (L - 0.1055613458*a - 0.0638541728*b_) ** 3
    s = (L - 0.0894841775*a - 1.2914855480*b_) ** 3
    rgb = (+4.0767416621*l - 3.3077115913*m + 0.2309699292*s,
           -1.2684380046*l + 2.6097574011*m - 0.3413193965*s,
           -0.0041960863*l - 0.7034186147*m + 1.7076147010*s)
    out = "#"
    for c in rgb:
        c = max(0.0, min(1.0, c))
        v = 12.92*c if c <= 0.0031308 else 1.055*(c ** (1/2.4)) - 0.055
        out += "%02X" % max(0, min(255, round(v*255)))
    return out


def mix_oklab(c1, c2, pct):
    A, B = _rgb2oklab(c1), _rgb2oklab(c2)
    t = pct/100
    return _oklab2hex(*[A[i]*t + B[i]*(1-t) for i in range(3)])


# ------------------------------------------------------------- token resolver
PRIMITIVES = dict(re.findall(
    r'(--acme-(?:clay|gray|red|sky)-\d+)\s*:\s*(#[0-9A-Fa-f]{6})', CSS))


def _block(pattern):
    m = re.search(pattern, CSS, re.S)
    if not m:
        sys.exit(f"check-contrast: could not locate token block /{pattern}/")
    return m.group(1)


def _resolve(src):
    out = {}
    for name, val in re.findall(r'(--acme-color-[\w-]+)\s*:\s*([^;]+);', src):
        val = val.strip()
        m = re.match(r'var\((--acme-[\w-]+)\)$', val)
        if m:
            out[name] = PRIMITIVES.get(m.group(1), val)
            continue
        m = re.match(r'color-mix\(in oklab,\s*var\((--acme-[\w-]+)\)\s*(\d+)%,'
                     r'\s*var\((--acme-[\w-]+)\)\)$', val)
        if m:
            out[name] = mix_oklab(PRIMITIVES[m.group(1)],
                                  PRIMITIVES[m.group(3)], int(m.group(2)))
            continue
        if val.startswith('#'):
            out[name] = val
    return out


THEMES = {
    'light': _resolve(_block(r'/\* Semantic aliases — light theme.*?\*/(.*?)\n\s*accent-color')),
    'dark':  _resolve(_block(r':root\[data-theme="dark"\]\s*\{(.*?)\n\}')),
}


def token(theme, key):
    v = THEMES[theme].get('--acme-color-' + key)
    if v is None:
        sys.exit(f"check-contrast: no --acme-color-{key} in {theme} theme")
    return v


# ------------------------------------------------------------------- pairings
def pairings():
    """(label, fg, bg, threshold, note) — what the components actually render."""
    p = []
    add = lambda *a: p.append(a)
    for bg in ('canvas', 'surface', 'surface-raised'):
        add(f'text on {bg}', 'text', bg, T_TEXT, 'body')
        add(f'text-muted on {bg}', 'text-muted', bg, T_TEXT, 'secondary / help')
        add(f'text-subtle on {bg}', 'text-subtle', bg, T_TEXT, 'placeholder / caption')
        add(f'link on {bg}', 'link', bg, T_TEXT, 'inline link')
        add(f'accent on {bg}', 'accent', bg, T_TEXT, 'kicker / numeral, 12px')
    add('link-hover on canvas', 'link-hover', 'canvas', T_TEXT, 'hover')
    # selection renders as TEXT (tab label, sorted th, current nav item)
    add('selected on canvas', 'selected', 'canvas', T_TEXT, 'active tab label')
    add('selected on surface', 'selected', 'surface', T_TEXT, 'sorted column header')
    add('selected on selected-soft', 'selected', 'selected-soft', T_TEXT, 'current nav item')
    add('selected indicator vs canvas', 'selected', 'canvas', T_UI, 'tab underline')
    # filled controls
    add('on-primary on primary', 'on-primary', 'primary', T_TEXT, 'primary button label')
    add('on-primary on primary-hover', 'on-primary', 'primary-hover', T_TEXT, 'hover')
    add('on-primary on danger-emphasis', 'on-primary', 'danger-emphasis', T_TEXT, 'danger button')
    # status
    for k in ('success', 'warning', 'danger', 'info'):
        add(f'{k} on canvas', k, 'canvas', T_TEXT, 'status text / icon')
        add(f'{k} on surface-raised', k, 'surface-raised', T_TEXT, 'status inside a card')
        add(f'{k}-soft-text on {k}-soft', f'{k}-soft-text', f'{k}-soft', T_TEXT, 'badge / alert')
    add('badge neutral', 'text-muted', 'surface', T_TEXT, 'default badge')
    # UI component boundaries (1.4.11)
    add('focus ring vs canvas', 'focus', 'canvas', T_UI, 'focus indicator')
    add('focus ring vs surface-raised', 'focus', 'surface-raised', T_UI, 'focus on a card')
    add('input border vs surface-raised', 'border-strong', 'surface-raised', T_UI, 'field boundary')
    add('input border vs canvas', 'border-strong', 'canvas', T_UI, 'field boundary')
    add('switch track vs surface', 'border-strong', 'surface', T_UI, 'unchecked switch')
    # A card is a non-interactive container, also carrying a fill and a shadow,
    # so 1.4.11's 3:1 does not apply — tracked as a perceptibility floor only.
    add('card border vs canvas', 'border', 'canvas', 1.5, 'decorative divider')
    # charts
    add('data vs canvas', 'data', 'canvas', T_UI, 'bar mark')
    add('data-highlight vs canvas', 'data-highlight', 'canvas', T_UI, 'takeaway mark')
    return p


def main():
    show_all = '--all' in sys.argv
    failures = []
    for theme in ('light', 'dark'):
        print(f"\n{theme.upper()}")
        for label, fg, bg, need, note in pairings():
            r = ratio(token(theme, fg), token(theme, bg))
            ok = r >= need
            thin = ok and need == T_TEXT and r < 5.0
            if not ok:
                failures.append((theme, label, r, need, note))
            if show_all or not ok or thin:
                flag = 'FAIL' if not ok else ('thin' if thin else 'ok  ')
                print(f"  {r:6.2f}:1  min {need:.1f}  {flag}  {label:38s} {note}")
        if not show_all and not failures:
            print("  all pairings pass")

    # the takeaway must be the most prominent mark on a chart
    for theme in ('light', 'dark'):
        d = ratio(token(theme, 'data'), token(theme, 'canvas'))
        h = ratio(token(theme, 'data-highlight'), token(theme, 'canvas'))
        if h <= d:
            failures.append((theme, 'data-highlight weaker than data', h, d,
                             'the takeaway must out-contrast the plain bars'))

    if failures:
        print(f"\n{len(failures)} FAILING pairing(s):")
        for theme, label, r, need, note in failures:
            print(f"  {theme:5s} {r:6.2f}:1 (min {need:.1f})  {label} — {note}")
        return 1
    print("\nAll colour pairings meet WCAG AA in both themes.")
    return 0


if __name__ == '__main__':
    sys.exit(main())
