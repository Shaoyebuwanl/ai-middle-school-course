export const BRAND = {
  name: '中学生 AI 做 App 课程',
  tagline: '按步骤做｜每节课一个作品｜零基础也能完成',
};

// 香港/海外可用（速度快）
export const AI_TOOLS_HK = [
  { name: 'ChatGPT', url: 'https://chat.openai.com/', note: '适合：写文案、做题目、改提示词。' },
  { name: 'Gemini', url: 'https://gemini.google.com/', note: '备选：总结、改写、出题也很强。' },
];

// 大陆可用（更稳定）
export const AI_TOOLS_CN = [
  { name: 'Kimi', url: 'https://kimi.moonshot.cn/', note: '适合：中文写作、总结、做学习资料。' },
  { name: '通义千问', url: 'https://tongyi.aliyun.com/', note: '适合：中文问答、生成练习题。' },
  { name: '豆包', url: 'https://www.doubao.com/', note: '适合：快速生成内容与改写。' },
  { name: 'DeepSeek', url: 'https://chat.deepseek.com/', note: '适合：写代码、做小工具。' },
];

export const PROMPT_TEMPLATE = [
  { k: '你要 AI 做什么？', v: '例如：生成题目/写解释/改文案/写代码。' },
  { k: '给谁看？', v: '例如：初中生。' },
  { k: '限制条件', v: '例如：不要专业术语；每步不超过 2 句话。' },
  { k: '输出格式', v: '例如：先给步骤清单；再给可复制代码。' },
];

// 课程地图：先保证“任何地区、任何电脑/手机”都能完成
export const LESSONS = [
  {
    slug: 'l1-first-app',
    order: 1,
    title: '第 1 课：做出第一个 App（浏览器小应用）',
    duration: '30–45 分钟',
    outcome: '一个能在浏览器运行的“题目小应用”（可改成你的主题）。',
    aiSkill: '把任务拆小：让 AI 一次只做一小步',
    resources: [
      { title: '下载模板（HTML/CSS/JS）', href: '/templates/lesson1-first-webapp.zip' },
      { title: '打开 AI / Prompt 工具', href: '/prompt' },
    ],
    steps: [
      '下载模板 zip（在本页“资源”里），解压后双击打开 index.html（用浏览器打开）。',
      '先确认能运行：你能看到标题、按钮；点“生成题目”会出现一道题。',
      '把标题/描述改成你的主题（例如：英语单词、地理、科普）。',
      '让 AI 帮你生成 10 道题（复制下面 Prompt），把题目粘贴进 app.js 的 questions 数组。',
      '测试：随机出题、点选项能提示对错。',
      '可选：在手机浏览器打开 index.html（或上传到你的网盘/网站），体验“像 App 一样使用”。',
    ],
    prompts: [
      '请为“初中生学习小应用”生成 10 道四选一选择题（中文），主题：【我自己的主题】。每题包含：题目、4 个选项、正确答案。输出为 JSON 数组，字段为 q / choices / answer，方便我直接复制到 JavaScript 里。',
      `请把下面这段题目 JSON 改写成更简单易懂的版本（初中生能看懂），不要使用专业术语：

【把你的 JSON 粘贴在这里】`,
    ],
    checklist: [
      '我能在浏览器打开 index.html 并看到界面',
      '我能点击按钮生成题目',
      '我用 AI 生成了题目并成功复制到 app.js',
      '我能答题并看到“对/错”提示',
    ],
    troubleshoot: [
      '如果本页“资源”看不到下载按钮：请刷新页面，或回到“课程地图”再点进来。',
      '如果点了“下载模板”没反应：检查浏览器是否拦截了下载（地址栏右侧会有下载/拦截提示）。',
      '如果你在学校电脑不能下载：用手机打开网站下载，再用微信/网盘传到电脑。',
      '如果打开 index.html 是空白：确认你解压后打开的是最外层的 index.html，而不是压缩包预览里的文件。',
      '如果题目不显示：打开 app.js，确认 questions 数组里有内容，并保存后刷新页面（Ctrl+R）。'
    ],
  },
  {
    slug: 'l2-upgrade-ui',
    order: 2,
    title: '第 2 课：把小应用做得更像“真正的 App”（UI 升级）',
    duration: '30–60 分钟',
    outcome: '一个更好看的学习小应用：有进度条/得分/提示。',
    aiSkill: '让 AI 只改一处（只改 CSS / 只改一个组件）',
    resources: [
      { title: '打开 AI / Prompt 工具', href: '/prompt' },
      { title: '课程地图', href: '/course' },
    ],
    steps: [
      '在 style.css 里改样式：按钮、卡片、字体大小。',
      '让 AI 提供 3 套不同风格的配色方案（浅色、深色、护眼）。',
      '在 app.js 增加“得分”变量：答对 +1，答错不加分。',
      '增加“下一题”按钮：点一次换一道题。',
      '测试：连续做 5 题，得分正确显示。',
    ],
    prompts: [
      '请给我的学习小应用提供 3 套 UI 配色方案（背景、主按钮、文字、卡片边框）。要求：适合初中生，清爽不花哨。用表格输出。',
      '我有一个 HTML/CSS/JS 小应用。请只改 app.js，新增“得分”与“下一题”功能。要求：不要动 HTML 结构；给出可直接复制的完整 app.js 代码。',
    ],
    checklist: [
      '我能改样式让界面更清爽',
      '我添加了得分并能正常变化',
      '我添加了下一题按钮',
    ],
    troubleshoot: [
      '如果改了 CSS 没变化：确认保存了文件，并刷新页面（Ctrl+R）；必要时强制刷新（Ctrl+Shift+R）。',
      '如果 JS 报错：打开浏览器开发者工具（F12）→ Console，把第一条红色报错复制出来。',
      '如果得分/下一题异常：先把 app.js 回退到上一版，再让 AI 只改“一个功能”。'
    ],
  },
];
