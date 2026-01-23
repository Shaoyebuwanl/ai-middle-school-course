'use client';
import { useState } from 'react';

export default function CopyBox({ text }) {
  const [ok, setOk] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setOk(true);
      setTimeout(()=>setOk(false), 1200);
    } catch {
      setOk(false);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <pre className="whitespace-pre-wrap break-words text-sm text-slate-800">{text}</pre>
      <button
        type="button"
        onClick={copy}
        className="mt-3 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
      >
        {ok ? '已复制 ✅' : '复制 Prompt'}
      </button>
    </div>
  );
}
