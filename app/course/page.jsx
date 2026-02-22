import Link from 'next/link';
import { LESSONS } from '../../lib/courseData';

export default function CoursePage() {
  const sorted = [...LESSONS].sort((a,b)=>a.order-b.order);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h1 className="text-2xl font-bold">课程地图（{sorted.length} 节课）</h1>
        <p className="mt-2 text-slate-700">
          建议顺序学习：每节课做完一个小作品，再进入下一课。每课底部有“完成清单”，勾完就算完成。
        </p>
        <div className="mt-5">
          <Link href="/progress" className="text-sm font-semibold text-indigo-600 hover:underline">
            查看我的进度 →
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {sorted.map((l) => (
          <Link key={l.slug} href={`/lesson/${l.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-slate-500">第 {l.order} 课 · {l.duration}</div>
              <div className="text-sm font-semibold text-indigo-600 group-hover:underline">进入 →</div>
            </div>
            <div className="mt-2 text-lg font-bold text-slate-900">{l.title}</div>
            <div className="mt-2 text-sm text-slate-700"><span className="font-semibold">作品：</span>{l.outcome}</div>
            <div className="mt-2 text-xs text-slate-500">AI 能力：{l.aiSkill}</div>
          </Link>
        ))}
      </section>
    </div>
  );
}
