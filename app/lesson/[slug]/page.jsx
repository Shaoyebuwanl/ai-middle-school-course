import Link from 'next/link';
import { LESSONS } from '../../../lib/courseData';
import ClientChecklist from '../../../components/ClientChecklist';
import CopyBox from '../../../components/CopyBox';

export function generateStaticParams() {
  return LESSONS.map((l) => ({ slug: l.slug }));
}

export default function LessonPage({ params }) {
  const lesson = LESSONS.find((l) => l.slug === params.slug);

  // Defensive defaults: some lesson fields are optional.
  const steps = Array.isArray(lesson?.steps) ? lesson.steps : [];
  const prompts = Array.isArray(lesson?.prompts) ? lesson.prompts : [];
  const checklist = Array.isArray(lesson?.checklist) ? lesson.checklist : [];
  const troubleshoot = Array.isArray(lesson?.troubleshoot) ? lesson.troubleshoot : [];

  if (!lesson) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">找不到课程</h1>
        <Link href="/course" className="text-indigo-600 hover:underline">← 返回课程地图</Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm font-semibold text-slate-500">第 {lesson.order} 课 · {lesson.duration}</div>
          <Link href="/course" className="text-sm font-semibold text-indigo-600 hover:underline">返回课程地图</Link>
        </div>
        <h1 className="mt-2 text-2xl font-bold">{lesson.title}</h1>
        <p className="mt-3 text-slate-700"><span className="font-semibold">本课作品：</span>{lesson.outcome}</p>
        <p className="mt-2 text-sm text-slate-600">AI 能力：{lesson.aiSkill}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/prompt" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            打开 AI / Prompt 工具
          </Link>
          <Link href="/progress" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            我的进度
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-xl font-bold">步骤清单（照做即可）</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-800">
          {steps.map((s) => <li key={s}>{s}</li>)}
        </ol>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold">推荐 Prompt（复制去 AI 用）</h2>
          <p className="mt-2 text-sm text-slate-600">
            说明：本网站不直接连 AI（避免费用与隐私风险）。你复制 Prompt 到 AI 工具里运行即可。
          </p>
          <div className="mt-4 space-y-3">
            {prompts.map((p) => <CopyBox key={p} text={p} />)}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold">卡住了？先看这里</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-800">
            {troubleshoot.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-xl font-bold">完成清单（勾完就算完成）</h2>
        <div className="mt-5">
          <ClientChecklist items={checklist} storageKey={`checklist:${lesson.slug}`} />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <Link href="/course" className="text-sm font-semibold text-slate-700 hover:underline">← 返回课程地图</Link>
          {lesson.next ? (
            <Link href={`/lesson/${lesson.next}`} className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              下一课 →
            </Link>
          ) : (
            <Link href="/progress" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              我已完成课程（去查看进度） →
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
