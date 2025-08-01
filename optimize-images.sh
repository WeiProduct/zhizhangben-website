#!/bin/bash

echo "优化图片大小..."

if ! command -v sips &> /dev/null; then
    echo "sips命令不可用"
    exit 1
fi

mkdir -p images_backup

cp images/*.png images_backup/

for img in images/*.png; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        echo "优化 $filename..."
        
        if [[ "$filename" == "screen"* ]]; then
            sips -Z 800 "$img" --out "$img"
        else
            sips -Z 600 "$img" --out "$img"
        fi
        
        echo "优化后: $(du -h "$img")"
    fi
done

echo "图片优化完成！"
echo "原始图片备份在 images_backup/ 目录"