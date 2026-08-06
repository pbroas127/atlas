#!/usr/bin/env bash
# Atlas — card background generator
#
# Free text-to-image via Pollinations. No API key, no account, no payment.
#
# Usage:  ./tools/genimg.sh <slug> "<prompt>"
# Example: ./tools/genimg.sh app-ideas "abstract dark indigo blueprint grid, minimal, no text"
#
# Writes assets/img/<slug>.jpg
#
# Prompts should read as TEXTURE, not as a picture: these sit behind a card at
# low opacity. Abstract, dark, high contrast, no text, no faces, no busy detail.

set -euo pipefail

SLUG="${1:?usage: genimg.sh <slug> \"<prompt>\"}"
PROMPT="${2:?usage: genimg.sh <slug> \"<prompt>\"}"
W="${3:-1200}"
H="${4:-800}"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/assets/img/$SLUG.jpg"
mkdir -p "$ROOT/assets/img"

# Style suffix keeps every card visually coherent across the dashboard.
# Keep it SHORT — long prompts make the endpoint 500.
STYLE="abstract, dark, minimal, high contrast, no text"
FULL="$PROMPT, $STYLE"

# URL-encode the prompt
ENC=$(printf '%s' "$FULL" | sed -e 's/%/%25/g' -e 's/ /%20/g' -e 's/,/%2C/g' -e "s/'/%27/g" \
  -e 's/"/%22/g' -e 's/&/%26/g' -e 's/?/%3F/g' -e 's/#/%23/g' -e 's/+/%2B/g')

# seed keeps regeneration stable for a given slug.
# Must stay small — seeds above ~1e6 make the endpoint 500.
SEED=$(( $(printf '%s' "$SLUG" | cksum | cut -d' ' -f1) % 100000 ))

URL="https://image.pollinations.ai/prompt/${ENC}?width=${W}&height=${H}&seed=${SEED}&nologo=true"

echo "→ $SLUG"
echo "  prompt: $FULL"

# The endpoint 500s intermittently under load; retry before giving up.
for attempt in 1 2 3 4; do
  CODE=$(curl -s -L --max-time 180 -o "$OUT.tmp" -w '%{http_code}' "$URL" || echo "000")
  SIZE=$(wc -c < "$OUT.tmp" 2>/dev/null || echo 0)

  if [ "$CODE" = "200" ] && [ "$SIZE" -ge 2000 ]; then
    mv "$OUT.tmp" "$OUT"
    echo "  ✓ assets/img/$SLUG.jpg  ($SIZE bytes)"
    exit 0
  fi

  rm -f "$OUT.tmp"
  echo "  … attempt $attempt failed (http=$CODE bytes=$SIZE), retrying"
  sleep 5
done

echo "  ✗ giving up on $SLUG" >&2
exit 1
