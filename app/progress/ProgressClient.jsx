'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { LESSONS } from '../../lib/courseData';

function loadDone(slug) {
  try {
    const raw = window.localStorage.getItem(`checklist:${slug}`);
    if (!raw) return false;
    const obj = JSON.parse(raw);
    const values = Object.values(obj);
    return values.length > 0 && values.every(Boolean);
  } catch {
    return false;
  }
}

export default function ProgressClient() {
  const [doneMap, setDoneMap] = useState({});

  useEffect(() => {
    const m = {};
    LESSONS.forEach((l) => { m[l.slug] = loadDone(l.slug); });
    setDoneMap(m);
  }, []);

  const sorted = useMemo(() => [...LESSONS].sort((a,b)=>a.order-b.order), []);
  const doneCount = useMemo(() => sorted.filter(l => doneMap[l.slug]).length, [sorted, doneMap]);
  const total = sorted.length;

  const nextLesson = useMemo(() => sorted.find(l => !doneMap[l.slug]) || null, [sorted, doneMap]);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h1 className="text-2xl font-bold">我的进度</h1>
        <p className="mt-2 text-slate-700">
          进度保存在浏览器本地（同一台电脑/浏览器有效）。
        </p>
        <div className="mt-4 rounded-2xl bg-slate-50 p-5 text-sm text-slate-800">
          已完成：<span className="font-semibold">{doneCount}</span> / {total}
          {doneCount === total ? (
            <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">全部完成 ✅</span>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {nextLesson ? (
            <Link href={`/lesson/${nextLesson.slug}`} className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              继续学习：第 {nextLesson.order} 课 →
            </Link>
          ) : (
            <Link href="/course" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              回到课程地图
            </Link>
          )}
          <Link href="/prompt" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            打开 AI / Prompt 工具
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {sorted.map((l) => (
          <Link key={l.slug} href={`/lesson/${l.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold text-slate-500">第 {l.order} 课</div>
              {doneMap[l.slug] ? (
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">已完成</span>
              ) : (
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">未完成</span>
              )}
            </div>
            <div className="mt-2 text-lg font-bold text-slate-900">{l.title}</div>
            <div className="mt-2 text-sm text-slate-700"><span className="font-semibold">作品：</span>{l.outcome}</div>
          </Link>
        ))}
      </section>
    </div>
  );
}
