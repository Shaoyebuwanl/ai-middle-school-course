import { AI_TOOLS_HK, AI_TOOLS_CN } from '../../lib/courseData';
import CopyBox from '../../components/CopyBox';

const ToolCard = ({ t }) => (
  <a href={t.url} target="_blank" rel="noreferrer"
     className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow">
    <div className="text-base font-bold">{t.name}</div>
    <div className="mt-2 text-sm text-slate-600">{t.note}</div>
    <div className="mt-4 text-sm font-semibold text-indigo-600">打开（新窗口）→</div>
  </a>
);

const CopyTemplate = () => {
  const template = `【目标】我想让 AI 帮我做：
【受众】初中生
【限制】每步不超过 2 句话；不要专业术语
【输出格式】先给步骤清单，再给可复制内容

我的问题：`;

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="text-sm font-semibold text-slate-700">通用提示词模板（复制后改一改）</div>
      <div className="mt-3">
        <CopyBox text={template} />
      </div>
      <div className="mt-2 text-xs text-slate-500">如果复制按钮无反应：手动全选复制也可以。</div>
    </div>
  );
};

export default function PromptPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h1 className="text-2xl font-bold">AI / Prompt 工具</h1>
        <p className="mt-2 text-slate-700">
          先选一个你能打开的 AI 工具。香港/海外优先用 ChatGPT；大陆建议用 Kimi / 通义 / 豆包 / DeepSeek。
        </p>
      </section>

      <CopyTemplate />

      <section className="space-y-4">
        <h2 className="text-xl font-bold">香港 / 海外可用</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {AI_TOOLS_HK.map((t) => <ToolCard key={t.name} t={t} />)}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">大陆可用（更稳定）</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {AI_TOOLS_CN.map((t) => <ToolCard key={t.name} t={t} />)}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold">如果 AI 网站打不开怎么办？</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>先换一个工具（上面给了多种备选）。</li>
          <li>把同一个问题分成更小的步骤问（一次只让 AI 做一件事）。</li>
          <li>如果学校网络限制，建议用手机流量打开 AI 工具，再把结果复制回电脑。</li>
        </ul>
      </section>
    </div>
  );
}
