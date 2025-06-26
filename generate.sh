#!/bin/bash

set -e

# Kiểm tra đối số
if [ -z "$1" ]; then
  echo "❌ Thiếu đường dẫn file schema Zod!"
  echo "👉 Cách dùng: ./generate.sh <đường_dẫn_schema_zod.js>"
  exit 1
fi

INPUT_PATH="$1"

# Xác định đường dẫn output (gắn vào thư mục json-schema/, đổi .js → .json)
OUTPUT_PATH="json-schema/${INPUT_PATH%.js}.json"

echo "🚀 Đang generate JSON Schema từ: $INPUT_PATH"
echo "📦 Ghi vào: $OUTPUT_PATH"

# Tạo thư mục nếu chưa có
mkdir -p "$(dirname "$OUTPUT_PATH")"

# Chạy file schema Zod và ghi output vào file JSON
libs/bun "$INPUT_PATH" > "$OUTPUT_PATH"

echo "✅ Done."
