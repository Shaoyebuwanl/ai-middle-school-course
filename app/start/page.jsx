import Link from 'next/link';
import { NO_CODE_TOOLS } from '../../lib/courseData';

const ToolCard = ({ t }) => (
  <a href={t.url} target="_blank" rel="noreferrer"
     className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow">
    <div className="text-base font-bold">{t.name}</div>
    <div className="mt-2 text-sm text-slate-600">{t.note}</div>
    <div className="mt-4 text-sm font-semibold text-indigo-600">打开工具（新窗口）→</div>
  </a>
);

export default function StartPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h1 className="text-2xl font-bold">开始学习</h1>
        <p className="mt-2 text-slate-700">
          先打开一个无代码工具，然后进入第 1 课，按步骤清单做完即可。
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/lesson/l1-first-app" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            进入第 1 课：做出第一个 App
          </Link>
          <Link href="/course" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            先看课程地图
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">先打开一个无代码工具（任选一个）</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {NO_CODE_TOOLS.map((t) => <ToolCard key={t.name} t={t} />)}
        </div>
        <div className="text-sm text-slate-600">
          安全提醒：不要输入姓名、电话、地址等隐私信息。课程只需要做页面和按钮。
        </div>
      </section>
    </div>
  );
}
