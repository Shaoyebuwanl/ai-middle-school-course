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
      { title: '下载进阶版项目包（AI Project Lab）', href: '/templates/AI-Project-Lab.zip', note: '想做更完整的作品集/项目制学习，用这个。' },
      { title: '打开 AI / Prompt 工具', href: '/prompt' },
    ],
    steps: [
      '① 点“下载模板（HTML/CSS/JS）”→ 得到一个 zip 文件。\n   - 如果点了没反应：看浏览器右上角是否拦截下载（允许后再点一次）。',
      '② 解压 zip → 你会看到 3 个文件：index.html / style.css / app.js。\n   - 一定要“先解压”，不要在压缩包里直接打开。',
      '③ 用浏览器打开 index.html（双击或右键→用浏览器打开）。\n   - 你应该能看到标题和按钮。',
      '④ 点“开始”确认能出题。\n   - 这一步只是确认模板能跑通。',
      '⑤ 复制下面第 1 个 Prompt 到 AI，让 AI 生成 10 道题（JSON）。',
      '⑥ 打开 app.js 来粘贴题目：\n   - 不要双击运行 app.js（会报错）。\n   - 正确方式：右键 app.js → “用记事本/VS Code 打开”。\n   - 把 AI 给你的题目粘贴到 var questions = [ ... ] 里面（替换原来的示例题）。保存。',
      '⑦ 回到浏览器刷新 index.html（Ctrl+R）→ 再点“生成题目”测试：选项能显示、点选能提示对/错。',
      '⑧ 可选：把文件夹发到手机/同学（微信/网盘），手机浏览器打开 index.html 也能用（像一个小 App）。',
    ],
    prompts: [
      '请为“初中生学习小应用”生成 10 道四选一选择题（中文），主题：【我自己的主题】。每题包含：题目(q)、4个选项(choices)、正确答案(answer)。输出为 JSON 数组（外面用 [ ] 包住），方便我复制到 app.js 里。不要输出任何解释文字，也不要用 ```json 代码框。注意：choices 必须是 4 个字符串。answer 可以写“正确选项的内容”，也可以写字母 A/B/C/D。',
      `我已经有一段题目 JSON（就是一个 [ ... ] 数组）。请把它改写成“更简单、初中生能看懂”的版本：
- 不要专业术语
- 题目更短
- 选项更清楚
输出仍然是同样格式的 JSON 数组（q / choices / answer）。

【把你的 JSON 整段粘贴在这里】`,
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
    next: 'l2-upgrade-ui',
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
      '① 打开 style.css（用记事本/VS Code）→ 改按钮颜色、卡片圆角、字体大小，保存。',
      '② 回到浏览器刷新（Ctrl+R）→ 看样式是否生效（不刷新可能看不到变化）。',
      '③ 复制 Prompt 让 AI 给你 3 套配色方案，你选 1 套填进 style.css。',
      '④ 打开 app.js → 新增“得分 score”变量：答对 +1，答错不加分；保存。',
      '⑤ 增加“下一题”按钮：点击后换题，并把上一题的提示清空；保存。',
      '⑥ 测试：连续做 5 题，得分会变化；刷新页面不会报错。',
    ],
    prompts: [
      '请给我的学习小应用提供 3 套 UI 配色方案（背景、主按钮、文字、卡片边框）。要求：适合初中生，清爽不花哨。用表格输出。',
      '我有一个 HTML/CSS/JS 小应用。请只改 app.js，新增“得分”与“下一题”功能。要求：不要动 HTML 结构；给出可直接复制的完整 app.js 代码。',
    ],
    troubleshoot: [
      '改了 style.css 但页面没变化：一定要保存文件，然后在浏览器按 Ctrl+R 刷新。',
      '打开 app.js 报错：不要双击运行，用编辑器打开；报错时检查是否少了逗号或引号。',
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
    next: 'l3-add-timer-feedback',
  },
  {
    slug: 'l3-add-timer-feedback',
    order: 3,
    title: '第 3 课：加入“倒计时 + 反馈提示”（像小游戏一样）',
    duration: '30–45 分钟',
    outcome: '你的题目小应用更像游戏：每题倒计时、时间到自动判错、答题反馈更清楚。',
    aiSkill: '把需求写成“规则列表”，让 AI 按规则改代码',
    resources: [
      { title: '如果你还没做第 1 课，先下载模板', href: '/templates/lesson1-first-webapp.zip', note: '第 3 课是在第 1 课模板基础上继续改。' },
      { title: '打开 AI / Prompt 工具', href: '/prompt' },
      { title: '课程地图', href: '/course' },
    ],
    steps: [
      '① 打开你的第 1 课文件夹（有 index.html / style.css / app.js）。',
      '② 在浏览器打开 index.html，确认能出题并有 4 个选项。',
      '③ 打开 app.js：找到“倒计时相关变量（timeLeft / timer）”和“start 按钮逻辑”。',
      '④ 复制下面 Prompt 给 AI：让它只改 app.js，加入规则：\n   - 每题 10 秒倒计时\n   - 倒计时 ≤ 3 秒闪烁\n   - 时间到自动结束本题并显示正确答案\n   - 点击“下一题”会重置倒计时与提示',
      '⑤ 把 AI 返回的 app.js 全部替换进去（覆盖原文件）→ 保存。',
      '⑥ 刷新 index.html（Ctrl+R）测试：\n   - 不点选项也会倒计时到 0\n   - 0 时会提示“时间到”并高亮正确答案\n   - 下一题正常进入并重新开始计时',
    ],
    prompts: [
      '我有一个 HTML/CSS/JS 题目小应用。请只改 app.js（不要改 index.html / style.css）。\n\n新增规则：\n1) 每题倒计时 10 秒；页面显示剩余秒数；\n2) 倒计时 <= 3 秒时文字闪烁；\n3) 时间到：本题自动结束，显示“时间到”，并高亮正确答案；\n4) 用户点选后立即判对错；\n5) 点击“下一题”：换题并重置倒计时与提示；\n6) 代码要兼容题库字段：q/choices 或 question/options；answer 支持 A/B/C/D 或 选项文字；\n\n请输出可直接复制的完整 app.js（不要解释）。',
    ],
    troubleshoot: [
      '时间到没有自动结束：检查 app.js 是否真的保存了；刷新页面（Ctrl+R）。',
      '闪烁没效果：检查你 CSS 里有没有 .blink 类（如果没有，让 AI 在 app.js 里用 classList 切换已有样式）。',
      '下一题倒计时不重置：让 AI 只修“下一题重置倒计时”这一条，不要让它重写全部。',
    ],
    checklist: [
      '我每题都有 10 秒倒计时',
      '倒计时 <= 3 秒会闪烁',
      '时间到会自动结束并显示正确答案',
      '下一题会重置倒计时与提示',
    ],
    next: 'l4-make-portfolio',
  },
  {
    slug: 'l4-make-portfolio',
    order: 4,
    title: '第 4 课：做作品集（让家长看得见你的成果）',
    duration: '30–60 分钟',
    outcome: '一个“作品集页面”（Portfolio）：包含作品截图、功能说明、迭代记录。',
    aiSkill: '让 AI 帮你写“项目说明 + 迭代日志”，但内容必须来自你的真实修改',
    resources: [
      { title: '下载进阶版项目包（AI Project Lab）', href: '/templates/AI-Project-Lab.zip', note: '里面自带作品集模板（Portfolio）。' },
      { title: '打开 AI / Prompt 工具', href: '/prompt' },
      { title: '课程地图', href: '/course' },
    ],
    steps: [
      '① 打开你的题目小应用，截图 2 张：\n   - 首页/题目界面\n   - 答对/答错提示界面（最好能看到颜色反馈）',
      '② 新建一个文件：PORTFOLIO.md（用记事本/VS Code）。',
      '③ 把下面模板复制进去，并把“项目名称/做了什么/你遇到的 bug”填成真实内容。',
      '④ 复制 Prompt 让 AI 帮你把文字润色成“家长也看得懂”的版本（但不要编造）。',
      '⑤ 可选：把项目放到 GitHub（你自己仓库），把 PORTFOLIO.md 一起上传。',
    ],
    prompts: [
      '我做了一个浏览器题目小应用（HTML/CSS/JS）。请帮我把下面的作品集文字改成更清晰、适合家长阅读的介绍。要求：\n- 真实，不要夸大\n- 用初中生也看得懂的话\n- 结构：项目介绍 / 我做了什么功能 / 我修复了什么 bug / 我学到了什么\n\n【把我写的 PORTFOLIO.md 内容粘贴在这里】',
    ],
    checklist: [
      '我创建了 PORTFOLIO.md 并写了项目说明',
      '我记录了至少 2 次真实迭代（例如：修复选项空白、改文字颜色）',
      '我有 2 张作品截图',
    ],
    next: 'l5-vibe-coding',
  },
  {
    slug: 'l5-vibe-coding',
    order: 5,
    title: '第 5 课：Vibe Coding 入门（用 AI 快速迭代你的创意）',
    duration: '30–60 分钟',
    outcome: '你能用一段“需求说明”让 AI 帮你改功能，并学会验证与回退。',
    aiSkill: '“先写规则 → 再让 AI 改 → 自己测试 → 只修一个问题”',
    resources: [
      { title: '打开 AI / Prompt 工具', href: '/prompt' },
      { title: '课程地图', href: '/course' },
    ],
    steps: [
      '① 选择你想加的一个小功能（只选 1 个）：\n   A. 护眼模式（浅绿背景）\n   B. 题目分类（数学/英语/常识）\n   C. 10 题结束给评价（优秀/继续加油）',
      '② 写成“规则列表”（不要写代码）：例如“护眼模式：背景变浅绿，文字仍是黑色”。',
      '③ 把规则列表复制给 AI，让它只改一个文件：\n   - 护眼模式：只改 style.css\n   - 题目分类：只改 app.js\n   - 结束评价：只改 app.js',
      '④ AI 给你代码后：先备份原文件（复制一份 app_backup.js），再替换。',
      '⑤ 测试：如果报错，只把第一条红色报错复制给 AI，让它只修这一条。',
      '⑥ 完成后写进 PORTFOLIO.md：我新增了什么功能 + 我怎么测试的。',
    ],
    prompts: [
      '我在做一个 HTML/CSS/JS 的题目小应用。请按下面规则只改一个文件（我会告诉你改哪个）。\n\n【规则列表】\n- （在这里写你的规则）\n\n限制：\n- 不要改其他文件\n- 不要解释\n- 输出可直接复制的完整文件内容',
      '我替换代码后报错了。请你只修复这个报错，不要重写全部：\n【把浏览器 Console 第一条红色报错粘贴在这里】\n\n并输出修复后的完整文件内容。',
    ],
    troubleshoot: [
      '最常见的坑：让 AI 一次改太多。你必须要求“只改一个文件/只加一个功能”。',
      '如果怎么都修不好：回退到备份文件，然后换一个更小的功能。',
    ],
    checklist: [
      '我用“规则列表”让 AI 改了一个功能',
      '我学会了先备份再替换',
      '我能用 Console 把报错复制给 AI 修复',
      '我把新增功能写进 PORTFOLIO.md',
    ],
  },
];
