'use client';

import { useMemo, useState } from 'react';

const SAMPLE_PROMPTS = [
  '用小學生能懂的方式解釋：什麼是 AI？',
  '把「機器學習」比喻成日常生活例子',
  '給我 3 個 App 可以用到 AI 的例子（簡短）',
  '請用繁體中文，回答要分點'
];

export default function ChatPlayground() {
  const [input, setInput] = useState(SAMPLE_PROMPTS[0]);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '嗨！我是教學用的「聊天機器人原型」。你可以嘗試不同問法，看看回答怎麼變。' }
  ]);
  const [loading, setLoading] = useState(false);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  async function send() {
    if (!canSend) return;
    const user = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, user]);
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ message: user.content })
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply || '（沒有回覆）' }]);
      setInput('');
    } catch (e) {
      setMessages((prev) => [...prev, { role: 'assistant', content: '抱歉，連線失敗。你可以再試一次。' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-4">
        <div className="text-sm font-semibold">聊天機器人 App 體驗（教學版）</div>
        <div className="mt-1 text-xs text-slate-500">
          提示：同一個問題，換一種問法（加背景、限制輸出格式），回答通常會更好。
        </div>
      </div>

      <div className="h-[360px] overflow-auto p-4">
        <div className="space-y-3">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={
                m.role === 'user'
                  ? 'ml-auto max-w-[85%] rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white'
                  : 'mr-auto max-w-[85%] rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-900'
              }
            >
              {m.content}
            </div>
          ))}
          {loading && (
            <div className="mr-auto max-w-[85%] rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
              正在思考…
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-slate-200 p-4">
        <div className="flex flex-wrap gap-2">
          {SAMPLE_PROMPTS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setInput(p)}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200"
            >
              {p}
            </button>
          ))}
        </div>

        <div className="mt-3 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') send();
            }}
            placeholder="輸入你的問題…"
            className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
          />
          <button
            type="button"
            onClick={send}
            disabled={!canSend}
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50 hover:bg-indigo-700"
          >
            發送
          </button>
        </div>
      </div>
    </div>
  );
}
