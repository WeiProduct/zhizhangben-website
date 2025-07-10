# 智账本官网

这是智账本应用的宣传网站，使用纯HTML/CSS/JavaScript构建，可以免费托管在GitHub Pages上。

## 特性

- 🎨 现代化响应式设计
- 📱 移动端友好
- 🚀 无需构建工具，即开即用
- 💡 包含所有必要页面（主页、隐私政策、使用条款）
- 🎯 SEO优化

## 部署到GitHub Pages

### 方法1：作为独立仓库

1. 创建新的GitHub仓库（例如：`zhizhangben-website`）
2. 将`website`文件夹中的所有内容上传到仓库根目录
3. 在仓库设置中启用GitHub Pages：
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - 点击Save

### 方法2：作为现有项目的一部分

1. 将`website`文件夹提交到您的项目仓库
2. 在仓库设置中启用GitHub Pages：
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / website
   - 点击Save

## 自定义内容

### 需要替换的占位内容：

1. **图片资源**
   - `images/app-mockup.png` - 应用主界面展示图
   - `images/screen1-4.png` - 应用截图（4张）

2. **下载链接**
   - 在`index.html`中找到App Store下载链接并替换为实际链接

3. **联系信息**
   - 邮箱地址：将所有`@zhizhangben.com`替换为实际邮箱
   - 公司地址：在隐私政策和使用条款中更新

4. **社交媒体**
   - 更新页脚的社交媒体链接

## 文件结构

```
website/
├── index.html          # 主页
├── privacy.html        # 隐私政策
├── terms.html          # 使用条款
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # JavaScript文件
├── images/
│   ├── app-store-badge.svg
│   └── google-play-badge.svg
└── README.md           # 本文件
```

## 技术栈

- HTML5
- CSS3（含CSS Grid和Flexbox）
- 原生JavaScript
- Google Fonts（Inter字体）

## 浏览器支持

- Chrome（最新版本）
- Safari（最新版本）
- Firefox（最新版本）
- Edge（最新版本）
- 移动端浏览器

## 许可证

版权所有 © 2025 智账本