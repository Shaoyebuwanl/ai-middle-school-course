'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { LESSONS, BRAND } from '../lib/courseData';

function cx(...arr) {
  return arr.filter(Boolean).join(' ');
}

function NavItem({ href, label, badge }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== '/' && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      className={cx(
        'flex items-center justify-between gap-2 rounded-2xl px-3 py-2 text-sm font-semibold',
        active ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
      )}
    >
      <span>{label}</span>
      {badge ? (
        <span className={cx('rounded-full px-2 py-0.5 text-xs font-semibold', active ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700')}>
          {badge}
        </span>
      ) : null}
    </Link>
  );
}

function LessonLink({ l }) {
  const pathname = usePathname();
  const active = pathname === `/lesson/${l.slug}`;

  return (
    <Link
      href={`/lesson/${l.slug}`}
      className={cx(
        'group flex items-start gap-3 rounded-2xl px-3 py-2 text-sm',
        active ? 'bg-indigo-600 text-white' : 'text-slate-700 hover:bg-slate-100'
      )}
    >
      <div className={cx('mt-0.5 flex h-6 w-6 items-center justify-center rounded-xl text-xs font-extrabold', active ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700')}>
        {l.order}
      </div>
      <div className="min-w-0">
        <div className={cx('truncate font-semibold', active ? 'text-white' : 'text-slate-900')}>{l.title}</div>
        <div className={cx('truncate text-xs', active ? 'text-white/80' : 'text-slate-500')}>{l.outcome}</div>
      </div>
    </Link>
  );
}

export default function AppShell({ children }) {
  const [open, setOpen] = useState(false);
  const sorted = useMemo(() => [...LESSONS].sort((a, b) => a.order - b.order), []);

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 hover:bg-slate-200 md:hidden"
              aria-label="打开菜单"
            >
              ☰
            </button>
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 shadow-sm" />
              <div className="leading-tight">
                <div className="text-sm font-extrabold text-slate-900">{BRAND.name}</div>
                <div className="text-xs text-slate-500">像 App 一样学会做作品</div>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link href="/start" className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              立即开始
            </Link>
            <Link href="/progress" className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200">
              我的进度
            </Link>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[300px_1fr]">
        {/* Desktop sidebar */}
        <aside className="sticky top-[61px] hidden h-[calc(100vh-61px)] overflow-auto border-r border-slate-200 bg-white/60 p-4 backdrop-blur md:block">
          <div className="space-y-2">
            <NavItem href="/start" label="开始" />
            <NavItem href="/course" label="课程地图" badge={`${sorted.length} 课`} />
            <NavItem href="/prompt" label="Prompt 工具" />
            <NavItem href="/progress" label="我的进度" />
          </div>

          <div className="mt-6">
            <div className="mb-2 text-xs font-semibold text-slate-500">Lessons</div>
            <div className="space-y-1">
              {sorted.map((l) => (
                <LessonLink key={l.slug} l={l} />
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-gradient-to-br from-indigo-600 to-sky-500 p-4 text-white">
            <div className="text-sm font-extrabold">提示</div>
            <div className="mt-1 text-xs text-white/90">一次只做一件事：复制 Prompt → 粘贴 → 测试。</div>
          </div>
        </aside>

        {/* Mobile drawer */}
        {open ? (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
            <div className="absolute left-0 top-0 h-full w-[86%] max-w-[340px] bg-white p-4 shadow-xl slide-up">
              <div className="flex items-center justify-between">
                <div className="text-sm font-extrabold">菜单</div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-slate-100 px-3 py-2 text-sm font-semibold"
                >
                  关闭
                </button>
              </div>

              <div className="mt-3 space-y-2">
                <NavItem href="/start" label="开始" />
                <NavItem href="/course" label="课程地图" badge={`${sorted.length} 课`} />
                <NavItem href="/prompt" label="Prompt 工具" />
                <NavItem href="/progress" label="我的进度" />
              </div>

              <div className="mt-6">
                <div className="mb-2 text-xs font-semibold text-slate-500">Lessons</div>
                <div className="space-y-1">
                  {sorted.map((l) => (
                    <div key={l.slug} onClick={() => setOpen(false)}>
                      <LessonLink l={l} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Content */}
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
