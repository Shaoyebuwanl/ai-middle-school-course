'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import ClientChecklist from './ClientChecklist';
import CopyBox from './CopyBox';

function cx(...arr) { return arr.filter(Boolean).join(' '); }

function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        'rounded-2xl px-3 py-2 text-sm font-semibold transition',
        active ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
      )}
    >
      {children}
    </button>
  );
}

function Accordion({ title, subtitle, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="soft-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left"
      >
        <div>
          <div className="text-base font-extrabold text-slate-900">{title}</div>
          {subtitle ? <div className="mt-1 text-sm text-slate-600">{subtitle}</div> : null}
        </div>
        <div className={cx('mt-1 rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 transition', open ? 'bg-slate-900 text-white' : '')}>
          {open ? '收起' : '展开'}
        </div>
      </button>
      {open ? <div className="border-t border-slate-200 p-5 slide-up">{children}</div> : null}
    </div>
  );
}

function Stepper({ steps }) {
  const [focus, setFocus] = useState(0);
  const safeSteps = Array.isArray(steps) ? steps : [];

  return (
    <div className="soft-card">
      <div className="border-b border-slate-200 p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-base font-extrabold">步骤清单</div>
            <div className="mt-1 text-sm text-slate-600">像打游戏一样：一关一关过，不用一次看完。</div>
          </div>
          <div className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {Math.min(focus + 1, safeSteps.length)} / {safeSteps.length}
          </div>
        </div>
      </div>

      <div className="grid gap-3 p-5 md:grid-cols-[220px_1fr]">
        <div className="space-y-2">
          {safeSteps.map((s, idx) => (
            <button
              key={s}
              type="button"
              onClick={() => setFocus(idx)}
              className={cx(
                'flex w-full items-start gap-3 rounded-2xl border px-3 py-2 text-left text-sm transition',
                idx === focus
                  ? 'border-indigo-300 bg-indigo-50'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              )}
            >
              <div className={cx('mt-0.5 flex h-6 w-6 items-center justify-center rounded-xl text-xs font-extrabold', idx === focus ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700')}>
                {idx + 1}
              </div>
              <div className="line-clamp-2 text-slate-800">{s}</div>
            </button>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <div className="text-xs font-semibold text-slate-500">当前步骤</div>
          <div className="mt-2 text-lg font-extrabold text-slate-900">第 {focus + 1} 步</div>
          <div className="mt-2 text-sm text-slate-800">{safeSteps[focus] || '（没有步骤）'}</div>

          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFocus((v) => Math.max(0, v - 1))}
              className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              上一步
            </button>
            <button
              type="button"
              onClick={() => setFocus((v) => Math.min(safeSteps.length - 1, v + 1))}
              className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              下一步
            </button>
          </div>

          <div className="mt-3 text-xs text-slate-500">
            小技巧：如果你卡住了，先去「卡住了？」那一页找对应问题。
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LessonViewer({ lesson, troubleshoot, resources }) {
  const [tab, setTab] = useState('steps');

  const steps = Array.isArray(lesson?.steps) ? lesson.steps : [];
  const prompts = Array.isArray(lesson?.prompts) ? lesson.prompts : [];
  const checklist = Array.isArray(lesson?.checklist) ? lesson.checklist : [];

  const header = useMemo(() => {
    return {
      title: lesson.title,
      subtitle: `第 ${lesson.order} 课 · ${lesson.duration}`,
      outcome: lesson.outcome,
      aiSkill: lesson.aiSkill,
    };
  }, [lesson]);

  return (
    <div className="space-y-6 fade-in">
      <section className="soft-card overflow-hidden">
        <div className="bg-gradient-to-br from-indigo-600 to-sky-500 p-7 text-white md:p-9">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-semibold text-white/80">{header.subtitle}</div>
            <Link href="/course" className="text-xs font-semibold text-white/90 hover:underline">返回课程地图</Link>
          </div>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">{header.title}</h1>
          <div className="mt-3 text-sm text-white/90"><span className="font-semibold">本课作品：</span>{header.outcome}</div>
          <div className="mt-2 text-xs text-white/80">AI 能力：{header.aiSkill}</div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/prompt" className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              打开 Prompt 工具
            </Link>
            <Link href="/progress" className="rounded-2xl bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20">
              我的进度
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-t border-slate-200 bg-white p-4">
          <TabButton active={tab === 'steps'} onClick={() => setTab('steps')}>步骤</TabButton>
          <TabButton active={tab === 'resources'} onClick={() => setTab('resources')}>资源</TabButton>
          <TabButton active={tab === 'prompts'} onClick={() => setTab('prompts')}>Prompt</TabButton>
          <TabButton active={tab === 'help'} onClick={() => setTab('help')}>卡住了？</TabButton>
          <TabButton active={tab === 'done'} onClick={() => setTab('done')}>完成</TabButton>
        </div>
      </section>

      {tab === 'steps' ? <Stepper steps={steps} /> : null}

      {tab === 'resources' ? (
        <div className="space-y-4 pop-in">
          <Accordion
            title="资源（下载用）"
            subtitle="模板文件会从本网站直接下载，无需登录。"
            defaultOpen
          >
            {resources?.length ? (
              <div className="grid gap-3 md:grid-cols-2">
                {resources.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    className="soft-card soft-card-hover p-4"
                  >
                    <div className="text-sm font-extrabold text-slate-900">{r.title || r.label}</div>
                    {r.note ? <div className="mt-1 text-xs text-slate-600">{r.note}</div> : null}
                    <div className="mt-3 text-xs font-semibold text-indigo-700">点击下载</div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-sm text-slate-700">本课没有额外下载资源。</div>
            )}
          </Accordion>

          <Accordion
            title="下载/打开失败怎么办？"
            subtitle="不用慌：90% 的问题都在这里。"
            defaultOpen
          >
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-800">
              {(troubleshoot || []).map((t) => <li key={t}>{t}</li>)}
            </ul>
          </Accordion>
        </div>
      ) : null}

      {tab === 'prompts' ? (
        <div className="space-y-4 pop-in">
          <Accordion
            title="推荐 Prompt（复制去 AI 用）"
            subtitle="本网站不直接连 AI：你复制 Prompt 到 AI 工具里运行即可。"
            defaultOpen
          >
            {prompts.length ? (
              <div className="space-y-3">
                {prompts.map((p) => <CopyBox key={p} text={p} />)}
              </div>
            ) : (
              <div className="text-sm text-slate-700">本课没有额外 Prompt。</div>
            )}
          </Accordion>
        </div>
      ) : null}

      {tab === 'help' ? (
        <div className="space-y-4 pop-in">
          <Accordion
            title="卡住了？先看这里"
            subtitle="把问题对号入座，然后再回到步骤继续做。"
            defaultOpen
          >
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-800">
              {(troubleshoot || []).map((t) => <li key={t}>{t}</li>)}
            </ul>
          </Accordion>
        </div>
      ) : null}

      {tab === 'done' ? (
        <div className="space-y-4 pop-in">
          <Accordion
            title="完成清单（勾完就算完成）"
            subtitle="进度保存在浏览器本地（同一台电脑/浏览器有效）。"
            defaultOpen
          >
            <ClientChecklist items={checklist} storageKey={`checklist:${lesson.slug}`} />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <Link href="/course" className="text-sm font-semibold text-slate-700 hover:underline">← 返回课程地图</Link>
              {lesson.next ? (
                <Link href={`/lesson/${lesson.next}`} className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                  下一课 →
                </Link>
              ) : (
                <Link href="/progress" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                  我已完成课程（去查看进度） →
                </Link>
              )}
            </div>
          </Accordion>
        </div>
      ) : null}
    </div>
  );
}
