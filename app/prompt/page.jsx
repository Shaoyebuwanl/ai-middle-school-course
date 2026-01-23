import { AI_TOOLS, PROMPT_TEMPLATE } from '../../lib/courseData';

const ToolCard = ({ t }) => (
  <a href={t.url} target="_blank" rel="noreferrer"
     className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow">
    <div className="text-base font-bold">{t.name}</div>
    <div className="mt-2 text-sm text-slate-600">{t.note}</div>
    <div className="mt-4 text-sm font-semibold text-indigo-600">打开（新窗口）→</div>
  </a>
);

export default function PromptPage() {
  const template = `【目标】我想让 AI 帮我：
【受众】面向：初中生
【限制】字数/语气/不要专业术语：
【输出格式】例如：用表格/用 3 条要点/先结论后理由

我的问题：`;

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h1 className="text-2xl font-bold">AI / Prompt 工具</h1>
        <p className="mt-2 text-slate-700">
          说明：本网站不内置 AI（避免费用与隐私风险）。你点击下面链接打开 AI 网站，然后把课程里的 Prompt 复制过去即可。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">打开 AI（任选一个）</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {AI_TOOLS.map((t) => <ToolCard key={t.name} t={t} />)}
        </div>
        <div className="text-sm text-slate-600">
          如果打不开：请检查网络/是否被学校网络限制；也可以换另一个 AI 工具。
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-xl font-bold">万能 Prompt 模板（不会问就用它）</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {PROMPT_TEMPLATE.map((x) => (
            <div key={x.k} className="rounded-2xl bg-slate-50 p-5">
              <div className="text-sm font-bold text-slate-900">{x.k}</div>
              <div className="mt-1 text-sm text-slate-700">{x.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="text-sm font-semibold text-slate-900">可直接复制的模板：</div>
          <pre className="mt-3 whitespace-pre-wrap break-words text-sm text-slate-800">{template}</pre>
          <div className="mt-3 text-xs text-slate-500">提示：写清楚限制条件与输出格式，AI 的回答会稳定很多。</div>
        </div>
      </section>
    </div>
  );
}
