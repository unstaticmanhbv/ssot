#!/bin/bash
git config merge.ours.driver true
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit

echo "✅ Đã bật Git hook và cấp quyền thực thi."
