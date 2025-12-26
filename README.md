# Pegaso - 个人主页

这是一个现代化的个人主页项目。采用纯 HTML、CSS 和 JavaScript 构建，无需任何框架依赖。

## ✨ 特性

- 🎨 **现代化设计**: 深色主题、渐变色、玻璃拟态效果
- 📱 **完全响应式**: 完美适配桌面、平板和移动设备
- ⚡ **流畅动画**: 打字机效果、视差滚动、淡入动画
- 🎯 **SEO 优化**: 语义化 HTML5、meta 标签优化
- 🚀 **性能优良**: 零依赖、快速加载
- ♿ **无障碍友好**: 符合 Web 无障碍标准

## 🛠️ 技术栈

- **HTML5**: 语义化标签、SEO 优化
- **CSS3**: CSS 变量、渐变、动画、响应式设计
- **JavaScript (ES6+)**: 交互效果、动画控制
- **Google Fonts**: Inter 字体家族
- **GitHub Pages**: 免费静态网站托管

## 📂 项目结构

```
.
├── index.html      # 主页面
├── style.css       # 样式表
├── script.js       # JavaScript 脚本
├── avatar.png      # 头像图片
└── README.md       # 项目说明
```

## 🚀 本地运行

### 方法一：使用 Python 服务器

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后访问 `http://localhost:8000`

### 方法二：使用 npx serve

```bash
npx serve .
```

### 方法三：直接打开

在浏览器中直接打开 `index.html` 文件

## 🌐 部署到 GitHub Pages

1. 创建名为 `username.github.io` 的仓库（将 username 替换为你的 GitHub 用户名）
2. 将代码推送到 main 分支
3. 在仓库设置中启用 GitHub Pages
4. 访问 `https://username.github.io`

```bash
# 初始化仓库
git init
git add .
git commit -m "Initial commit: Modern portfolio website"

# 关联远程仓库并推送
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

## 📝 自定义指南

### 修改主题颜色

编辑 `style.css` 文件中的 CSS 变量：

```css
:root {
  --primary: #6366f1;        /* 主色调 */
  --secondary: #ec4899;      /* 次要色 */
  --accent: #8b5cf6;         /* 强调色 */
  /* 其他颜色变量... */
}
```


## 🎨 设计亮点

- **深色主题**: 护眼舒适，科技感十足
- **渐变效果**: 多处使用现代渐变设计
- **玻璃拟态**: 卡片采用半透明背景和模糊效果
- **微动画**: 悬浮、淡入、打字机等多种动画效果
- **视觉层次**: 清晰的信息架构和视觉引导

## 📄 许可证

MIT License - 随意使用和修改

## 🙏 致谢

- 字体: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
---

**© 2025 Pegaso**
