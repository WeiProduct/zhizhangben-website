#!/bin/bash

echo "优化图片大小..."

# 安装必要的工具（如果没有）
if ! command -v sips &> /dev/null; then
    echo "sips命令不可用"
    exit 1
fi

# 创建备份目录
mkdir -p images_backup

# 备份原始图片
cp images/*.png images_backup/

# 优化PNG图片
for img in images/*.png; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        echo "优化 $filename..."
        
        # 使用sips调整质量和尺寸
        if [[ "$filename" == "screen"* ]]; then
            # 截图调整为合理尺寸
            sips -Z 800 "$img" --out "$img"
        else
            # app-mockup保持较大尺寸
            sips -Z 600 "$img" --out "$img"
        fi
        
        # 显示优化后的大小
        echo "优化后: $(du -h "$img")"
    fi
done

echo "图片优化完成！"
echo "原始图片备份在 images_backup/ 目录"