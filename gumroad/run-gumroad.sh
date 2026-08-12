#!/usr/bin/env bash
set -euo pipefail
export PATH="$HOME/.local/bin:$PATH"
ROOT="/mnt/e/Developer/Projects/ISK/pet-care/gumroad"
CMD="${1:-preview}"

if [[ "$CMD" == "preview" ]]; then
  gumroad products page preview sypuqv "$ROOT/landing.html" --json --no-input --non-interactive > "$ROOT/preview.json"
  python3 - <<'PY'
import json
from pathlib import Path
data=json.loads(Path("/mnt/e/Developer/Projects/ISK/pet-care/gumroad/preview.json").read_text(encoding="utf-8"))
print("success:", data.get("success"))
print("warning:", data.get("warning"))
print("sanitization_report:", json.dumps(data.get("sanitization_report"), indent=2))
html=data.get("custom_html") or ""
print("buy_count:", html.count('data-gumroad-action="buy"'))
print("has_new_cover:", "yynpdi742ybqaixyxsoa3i3in90e" in html)
print("has_new_thumb:", "9xy83inikw7u4qtmq007allyne7p" in html)
print("has_next16:", "Next.js 16" in html)
print("has_false_next14:", "Next.js 14" in html)
PY
elif [[ "$CMD" == "publish" ]]; then
  gumroad products page publish sypuqv "$ROOT/landing.html" --json --no-input --non-interactive > "$ROOT/publish.json"
  python3 - <<'PY'
import json
from pathlib import Path
data=json.loads(Path("/mnt/e/Developer/Projects/ISK/pet-care/gumroad/publish.json").read_text(encoding="utf-8"))
print("success:", data.get("success"))
print("warning:", data.get("warning"))
print("sanitization_report:", json.dumps(data.get("sanitization_report"), indent=2))
product=data.get("product") or {}
print("landing_url:", product.get("landing_url") or data.get("landing_url"))
PY
elif [[ "$CMD" == "description" ]]; then
  DESC=$(cat "$ROOT/description.html")
  gumroad products update sypuqv \
    --description "$DESC" \
    --custom-summary "Next.js 16 veterinary & pet care website template — 7 pages, appointment API, SEO-ready" \
    --json --no-input --non-interactive > "$ROOT/update.json"
  python3 - <<'PY'
import json
from pathlib import Path
data=json.loads(Path("/mnt/e/Developer/Projects/ISK/pet-care/gumroad/update.json").read_text(encoding="utf-8"))
print("success:", data.get("success"))
prod=(data.get("product") or data)
desc=prod.get("description") or ""
print("summary:", prod.get("custom_summary"))
print("has_next16:", "Next.js 16" in desc)
print("has_false_next14:", "Next.js 14" in desc)
print("has_react19:", "React 19" in desc)
print("has_tailwind4:", "Tailwind CSS 4" in desc)
PY
elif [[ "$CMD" == "url" ]]; then
  gumroad products page url sypuqv --json --jq '.product.landing_url' --no-input --non-interactive
else
  echo "usage: $0 preview|publish|description|url" >&2
  exit 2
fi
