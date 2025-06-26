#!/bin/bash

set -e

# Kiểm tra đối số
if [ -z "$1" ]; then
  echo "❌ Thiếu đường dẫn file schema Zod!"
  echo "👉 Cách dùng: ./generate.sh <đường_dẫn_schema_zod.js>"
  exit 1
fi

INPUT_PATH="$1"

# Cắt 'zod/' khỏi đầu
RELATIVE_PATH="${INPUT_PATH#zod/}"

# Đổi .js -> .json và gắn prefix json-schema/
OUTPUT_PATH="json-schema/${RELATIVE_PATH%.js}.json"

echo "🚀 Generating JSON Schema từ: $INPUT_PATH"
echo "📦 Output: $OUTPUT_PATH"

mkdir -p "$(dirname "$OUTPUT_PATH")"

# Chạy file schema và ghi output
./libs/bun "$INPUT_PATH" > "$OUTPUT_PATH"

echo "✅ Done."
