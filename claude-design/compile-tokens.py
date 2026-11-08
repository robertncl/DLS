#!/usr/bin/env python3
"""Compile claude-design/tokens.json (the Claude Design list format) to tokens.css.

Mirrors the output the Design System page produces: colour, shadow, spacing and
radius custom properties, the --font-* stacks that components/bundle.css reads,
one class per text style, and an @font-face per self-hosted font file.

Usage: python3 claude-design/compile-tokens.py [tokens.json] [tokens.css]
(defaults to the files next to this script)
"""
import json
import re
import sys
from pathlib import Path

here = Path(__file__).resolve().parent
src = Path(sys.argv[1]) if len(sys.argv) > 1 else here / "tokens.json"
out = Path(sys.argv[2]) if len(sys.argv) > 2 else here / "tokens.css"
t = json.loads(src.read_text())


def value(v):
    # "{acme-gray-0}" aliases become var(--acme-gray-0)
    return re.sub(r"\{([a-z0-9-]+)\}", r"var(--\1)", str(v))


def props(tokens):
    return [f"  --{tok['name']}: {value(tok['value'])};" for tok in tokens]


themes = [th["id"] for th in t["color"].get("themes", [])] or ["light"]
selector = ", ".join([":root"] + [f'[data-theme="{th}"]' for th in themes])

lines = ["/* ACME Design System — generated from tokens.json by compile-tokens.py */"]
lines += [selector + " {"]
lines += props(t["color"]["tokens"])
lines += props(t["shadow"]["tokens"])
lines += ["}", ":root {"]
lines += props(t["spacing"]["tokens"])
lines += props(t["radius"]["tokens"])
for family, stack in t["type"]["families"].items():
    lines.append(f"  --font-{family}: {stack};")
lines.append("}")

for group in t["type"]["groups"]:
    for s in group["styles"]:
        decl = [
            f"font-family: var(--font-{group['family']})",
            f"font-size: {s['fontSize']}",
            f"line-height: {s['lineHeight']}",
            f"font-weight: {s['fontWeight']}",
        ]
        if "letterSpacing" in s:
            decl.append(f"letter-spacing: {s['letterSpacing']}")
        lines.append(f".{s['name']} {{ " + "; ".join(decl) + "; }")

for f in t["type"]["fonts"]:
    lines.append(
        f'@font-face {{ font-family: "{f["family"]}"; src: url("{f["file"]}") format("woff2"); '
        f'font-weight: {f["weight"]}; font-style: {f["style"]}; font-display: swap; }}'
    )

out.write_text("\n".join(lines) + "\n")
print(f"wrote {out}")
