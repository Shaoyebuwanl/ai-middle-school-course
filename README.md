# 中学生 AI 做 App 课程（可测试版）

这是一个 **给中学生用的“按步骤做 App”学习网站**（Next.js + Tailwind）。
特点：界面清晰、每课一个作品、每课有步骤 + Prompt + 排错 + 完成清单。

## 本地运行（VS Code）

1) 解压项目  
2) VS Code 打开项目根目录  
3) 安装依赖（第一次需要）
```bash
npm install
```
4) 启动
```bash
npm run dev
```
5) 浏览器打开：
http://localhost:3000

> 注意：源码包不会包含 node_modules（很大）。npm install 会自动生成。

## 网站页面

- `/` 首页
- `/start` 开始（先打开无代码工具）
- `/course` 课程地图（5 节课）
- `/lesson/[slug]` 课程详情（步骤 + Prompt 复制 + 排错 + 完成清单）
- `/prompt` AI / Prompt 工具入口（外链 + 万能模板）
- `/progress` 我的进度（本地保存）

## 说明

- 本站不内置 AI API，避免费用与隐私风险；
- 课程中的 Prompt 复制到 AI 工具使用即可；
- 完成清单/进度保存在浏览器 localStorage（同一台电脑/浏览器有效）。
