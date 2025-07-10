# 部署指南 - 智账本宣传网站

## 方法1: 通过GitHub网页界面部署（推荐）

### 第1步: 创建GitHub仓库
1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" → "New repository"
3. 填写仓库信息：
   - Repository name: `zhizhangben-website` （或其他你喜欢的名字）
   - Description: 智账本官方网站
   - 选择 "Public"
   - 不要勾选 "Add a README file"
   - 点击 "Create repository"

### 第2步: 上传网站文件
1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将 `website` 文件夹中的所有文件拖拽到上传区域：
   - index.html
   - privacy.html
   - terms.html
   - css 文件夹
   - js 文件夹
   - images 文件夹
   - README.md
3. 在 "Commit changes" 部分填写：
   - Commit message: "Initial website upload"
4. 点击 "Commit changes"

### 第3步: 启用GitHub Pages
1. 在仓库页面，点击 "Settings" 标签
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - Branch: 选择 "main"
   - Folder: 选择 "/ (root)"
   - 点击 "Save"

### 第4步: 访问你的网站
1. GitHub Pages 会显示你的网站地址，格式为：
   `https://[你的用户名].github.io/[仓库名]/`
2. 等待几分钟让网站部署完成
3. 访问网址查看你的网站！

## 方法2: 通过命令行部署

如果你熟悉Git命令行，可以使用以下命令：

```bash
# 1. 进入网站目录
cd /Users/weifu/Desktop/记账2/website

# 2. 创建GitHub仓库（需要先安装GitHub CLI）
gh repo create zhizhangben-website --public

# 3. 添加远程仓库
git remote add origin https://github.com/[你的用户名]/zhizhangben-website.git

# 4. 推送代码
git push -u origin main

# 5. 启用GitHub Pages
gh repo edit --enable-pages --pages-branch main
```

## 自定义域名（可选）

如果你有自己的域名，可以：
1. 在仓库根目录创建 `CNAME` 文件，内容为你的域名
2. 在域名服务商处添加 CNAME 记录，指向 `[你的用户名].github.io`

## 需要帮助？

- GitHub Pages 文档：https://docs.github.com/en/pages
- 联系邮箱：1597498880weiproduct@gmail.com