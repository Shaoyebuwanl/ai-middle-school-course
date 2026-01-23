'use client';

import { useEffect, useMemo, useState } from 'react';

export default function ClientChecklist({ items, storageKey }) {
  const [checked, setChecked] = useState({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      setChecked(raw ? JSON.parse(raw) : {});
    } catch {
      setChecked({});
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {}
  }, [checked, storageKey]);

  const progress = useMemo(() => {
    const done = items.filter((_, idx) => checked[idx]).length;
    return { done, total: items.length, complete: done === items.length && items.length > 0 };
  }, [checked, items]);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm text-slate-700">
          进度：<span className="font-semibold">{progress.done}</span> / {progress.total}
          {progress.complete ? <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">已完成</span> : null}
        </div>
        <button
          type="button"
          onClick={() => setChecked({})}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
        >
          重置
        </button>
      </div>

      <div className="space-y-2">
        {items.map((label, idx) => (
          <label
            key={label}
            className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100"
          >
            <input
              type="checkbox"
              className="mt-1 h-4 w-4"
              checked={!!checked[idx]}
              onChange={(e) => setChecked((prev) => ({ ...prev, [idx]: e.target.checked }))}
            />
            <div className="text-sm text-slate-800">{label}</div>
          </label>
        ))}
      </div>
    </div>
  );
}
