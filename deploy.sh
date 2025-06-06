#!/bin/bash

# 简化部署脚本 - IIDX Landing Page
# 使用方法: ./deploy.sh

echo "🚀 开始部署 IIDX Landing Page..."

# 配置
SOURCE_DIR=$(pwd)
TARGET_DIR="/var/www/iidx-landing"
BUILD_DIR="$SOURCE_DIR/out"

echo "📁 源目录: $SOURCE_DIR"
echo "📁 目标目录: $TARGET_DIR"

# 拉取最新代码
echo "📥 拉取最新代码..."
git pull

# 安装依赖
echo "📦 安装依赖..."
yarn install

# 构建项目
echo "🔨 构建项目..."
yarn build

# 导出静态文件
echo "📦 导出静态文件..."
yarn export

# 检查构建目录是否存在
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ 构建目录 $BUILD_DIR 不存在"
    exit 1
fi

# 复制构建文件到目标目录
echo "📋 复制文件到 $TARGET_DIR ..."
sudo cp -r "$BUILD_DIR"/* "$TARGET_DIR"/

# 设置文件权限
echo "🔐 设置文件权限..."
sudo chown -R www-data:www-data "$TARGET_DIR"
sudo chmod -R 755 "$TARGET_DIR"

echo "✅ 部署完成！"
echo "🌐 网站已更新到: $TARGET_DIR" 