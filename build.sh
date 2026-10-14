#!/bin/sh
set -eu
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$ROOT"

# dist is generated output; replace it so stale files cannot leak into release.
rm -rf dist
mkdir -p dist/assets dist/video

cp index.html styles.css script.js photo-gallery.js manus-routes.json dist/
cp -R assets/dock assets/desktop assets/jewelry-icons assets/music assets/brand assets/background dist/assets/
rm -f dist/assets/desktop/custom-question.svg
mkdir -p dist/assets/marshall
cp -R assets/marshall/product-display-tight dist/assets/marshall/product-display-tight

# Product videos referenced by the current catalog. Keep originals untouched;
# only the disposable dist copies are re-encoded for a smaller release upload.
cp video/telegram-model-11.mp4 \
  video/tomb-cross.mp4 \
  video/skufia.mp4 \
  video/cold-siemens.mp4 \
  video/future-bone.mp4 \
  video/casting-meteor.mp4 \
  video/background-1.mp4 \
  video/background-2.mp4 \
  video/background-3.mp4 \
  dist/video/

if ! command -v ffmpeg >/dev/null 2>&1; then
  printf 'ERROR: FFmpeg is required to create the upload-sized release.\n' >&2
  exit 1
fi

for file in dist/video/*.mp4; do
  temp="${file%.mp4}.release.tmp.mp4"
  case "$file" in
    dist/video/background-*.mp4)
      ffmpeg -nostdin -hide_banner -loglevel error -y -i "$file" \
        -map 0:v:0 -an -c:v libx264 -preset medium -crf 28 \
        -pix_fmt yuv420p -movflags +faststart "$temp"
      ;;
    *)
      ffmpeg -nostdin -hide_banner -loglevel error -y -i "$file" \
        -map 0:v:0 -map '0:a?' -c:v libx264 -preset medium -crf 24 \
        -pix_fmt yuv420p -movflags +faststart -c:a copy "$temp"
      ;;
  esac
  mv "$temp" "$file"
done

for file in dist/assets/music/*.mp3; do
  temp="${file%.mp3}.release.tmp.mp3"
  ffmpeg -nostdin -hide_banner -loglevel error -y -i "$file" \
    -map 0:a:0 -map_metadata 0 -c:a libmp3lame -b:a 160k \
    -id3v2_version 3 "$temp"
  mv "$temp" "$file"
done

TOTAL_BYTES=$(find dist -type f -exec wc -c {} \; | awk '{ total += $1 } END { print total + 0 }')
if [ "$TOTAL_BYTES" -gt 90000000 ]; then
  printf 'ERROR: release is %s bytes; reduce it below the 90 MB safety target.\n' "$TOTAL_BYTES" >&2
  exit 1
fi

printf 'Built static site in %s/dist\n' "$ROOT"
printf 'Release size: %s bytes\n' "$TOTAL_BYTES"
