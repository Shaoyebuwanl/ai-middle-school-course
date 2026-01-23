import Link from 'next/link';
import { CASES } from '../../lib/courseData';

export const metadata = {
  title: '案例庫｜AI App 點子',
};

export default function CasesPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">案例庫：AI App 點子</h1>
        <p className="mt-2 text-sm text-slate-700">
          這些案例可以作為「經典教學案例」，學生學會一個就能類推做出更多創意作品。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/lesson/2" className="text-sm font-semibold text-indigo-600 hover:underline">
            ← 第 2 課：加 AI
          </Link>
          <Link href="/showcase" className="text-sm font-semibold text-indigo-600 hover:underline">
            看作品牆 →
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {CASES.map((c) => (
          <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">{c.title}</div>
            <div className="mt-2 text-xs font-semibold text-slate-500">AI 功能：{c.ai}</div>
            <p className="mt-3 text-sm text-slate-700">{c.idea}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold">老師備用：一個最簡教學案例</h2>
        <p className="mt-2 text-sm text-slate-700">
          建議用「聊天機器人學習輔導」作為主案例：用輸入框 + 發送按鈕 + 回覆區域，先做出原型，再談 AI。
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>第 1 課：先完成「按鈕 → 顯示訊息」</li>
          <li>第 2 課：把訊息改成「使用者輸入 → 回覆」</li>
          <li>第 3 課：用測試清單抓 bug、調整 Prompt</li>
        </ol>
      </div>
    </div>
  );
}
