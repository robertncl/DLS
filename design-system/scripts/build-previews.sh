#!/usr/bin/env bash
# Build self-contained previews: inline tokens/acme.css into each source in
# previews/src/, writing the result to previews/. Previews must not rely on
# relative links so they render anywhere (file://, design tools, sandboxes).
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
css="$root/tokens/acme.css"

for src in "$root"/previews/src/*.html; do
  out="$root/previews/$(basename "$src")"
  python3 - "$src" "$out" "$css" <<'PY'
import sys

src, out, css = sys.argv[1:4]
html = open(src).read()
marker = "<!-- @acme:styles -->"
if marker not in html:
    sys.exit(f"error: {src} is missing the {marker} marker")
style = "<style>\n" + open(css).read() + "</style>"
open(out, "w").write(html.replace(marker, style))
PY
  echo "built previews/$(basename "$out")"
done
