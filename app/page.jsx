import Link from 'next/link';
import { BRAND } from '../lib/courseData';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-sky-500 p-8 text-white shadow-sm md:p-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{BRAND.name}</h1>
          <p className="mt-3 text-white/90">{BRAND.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/start" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              开始第 1 课（从零到能跑）
            </Link>
            <Link href="/course" className="rounded-xl bg-white/15 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20">
              先看课程地图
            </Link>
          </div>

          <div className="mt-4 text-sm text-white/80">
            规则：每节课只做一件事 → 做完就能展示 → 再进入下一课
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-base font-bold">你会做出什么？</div>
          <p className="mt-2 text-sm text-slate-600">
            5 个小作品：按钮跳转、测验计分、学习计划、聊天助手、作品发布页。
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-base font-bold">你会学会怎么用 AI？</div>
          <p className="mt-2 text-sm text-slate-600">
            用 Prompt 让 AI 写短文案、出题、做清单、按格式输出。你负责核对与决定。
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-base font-bold">我从哪里开始？</div>
          <p className="mt-2 text-sm text-slate-600">
            直接进入第 1 课，照“步骤清单”做，不跳步。
          </p>
          <Link href="/start" className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:underline">去开始 →</Link>
        </div>
      </section>
    </div>
  );
}
