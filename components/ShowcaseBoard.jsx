'use client';

import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'showcase:items';

export default function ShowcaseBoard() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: '',
    title: '',
    ai: '',
    desc: '',
    link: ''
  });

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      setItems(raw ? JSON.parse(raw) : []);
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const canSubmit = useMemo(() => form.title.trim() && form.desc.trim(), [form]);

  function submit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    const entry = {
      ...form,
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      createdAt: new Date().toISOString()
    };
    setItems((prev) => [entry, ...prev]);
    setForm({ name: '', title: '', ai: '', desc: '', link: '' });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold">提交作品</h2>
        <p className="mt-1 text-xs text-slate-500">（教學版：資料儲存在你的瀏覽器，用於示範。要多人共享可接入資料庫。）</p>

        <div className="mt-4 grid gap-3">
          <Field label="你的名字（可選）">
            <input
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="例如：陳同學"
            />
          </Field>

          <Field label="作品名稱（必填）">
            <input
              value={form.title}
              onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="例如：英文作文小助手"
              required
            />
          </Field>

          <Field label="我用到的 AI 功能（可選）">
            <input
              value={form.ai}
              onChange={(e) => setForm((p) => ({ ...p, ai: e.target.value }))}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="例如：聊天機器人 / 圖像識別 / 情感分析"
            />
          </Field>

          <Field label="作品介紹（必填）">
            <textarea
              value={form.desc}
              onChange={(e) => setForm((p) => ({ ...p, desc: e.target.value }))}
              className="min-h-[120px] w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="用 3 句話：它解決什麼問題？怎麼用？亮點是什麼？"
              required
            />
          </Field>

          <Field label="作品連結（可選）">
            <input
              value={form.link}
              onChange={(e) => setForm((p) => ({ ...p, link: e.target.value }))}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="例如：網站/影片/截圖雲盤連結"
            />
          </Field>

          <button
            type="submit"
            disabled={!canSubmit}
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50 hover:bg-slate-800"
          >
            提交到作品牆
          </button>
        </div>
      </form>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold">作品牆</h2>
          <button
            type="button"
            onClick={() => setItems([])}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            清空（本機）
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {items.length === 0 ? (
            <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
              還沒有作品。先提交第一個吧！
            </div>
          ) : (
            items.map((it) => (
              <div key={it.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-semibold">{it.title}</div>
                    <div className="mt-1 text-xs text-slate-500">
                      {it.name ? `作者：${it.name}｜` : ''}{new Date(it.createdAt).toLocaleString()}
                    </div>
                  </div>
                  {it.ai ? <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700">{it.ai}</div> : null}
                </div>
                <p className="mt-3 text-sm text-slate-700 whitespace-pre-wrap">{it.desc}</p>
                {it.link ? (
                  <a
                    href={it.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-indigo-600 hover:underline"
                  >
                    打開連結 →
                  </a>
                ) : null}
              </div>
            ))
          )}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          要讓全班共享作品牆：把提交改成呼叫 /api/showcase，並接 Google Sheet / Supabase（我可以下一步幫你接）。
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="grid gap-1">
      <div className="text-xs font-semibold text-slate-700">{label}</div>
      {children}
    </label>
  );
}
