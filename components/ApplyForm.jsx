'use client';

import { useMemo, useState } from 'react';

export default function ApplyForm() {
  const [form, setForm] = useState({
    parentName: '',
    studentGrade: '小四–小六',
    contact: '',
    goal: '',
    preferredTime: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const canSubmit = useMemo(() => form.contact.trim().length > 0 && status !== 'sending', [form, status]);

  async function submit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || '提交失敗');
        setStatus('idle');
        return;
      }
      setStatus('success');
      setForm({ parentName: '', studentGrade: '小四–小六', contact: '', goal: '', preferredTime: '' });
    } catch {
      setError('網絡錯誤，請稍後再試');
      setStatus('idle');
    }
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold">提交聯絡資訊</h2>
      <p className="mt-1 text-xs text-slate-500">
        MVP 版：資料會送到 /api/apply（示範用）。正式版我可以幫你接 Google Sheet / Supabase。
      </p>

      {status === 'success' ? (
        <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800">
          提交成功！我們會盡快聯絡你。
        </div>
      ) : null}

      {error ? (
        <div className="mt-4 rounded-2xl bg-rose-50 p-4 text-sm text-rose-800">
          {error}
        </div>
      ) : null}

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <Field label="家長/聯絡人姓名（可選）">
          <input
            value={form.parentName}
            onChange={(e) => setForm((p) => ({ ...p, parentName: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="例如：陳先生"
          />
        </Field>

        <Field label="學生年級（可選）">
          <select
            value={form.studentGrade}
            onChange={(e) => setForm((p) => ({ ...p, studentGrade: e.target.value }))}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
          >
            <option>小四–小六</option>
            <option>初中</option>
            <option>高中</option>
          </select>
        </Field>

        <div className="md:col-span-2">
          <Field label="聯絡方式（必填：WhatsApp/電話/Email 皆可）">
            <input
              value={form.contact}
              onChange={(e) => setForm((p) => ({ ...p, contact: e.target.value }))}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="例如：WhatsApp +852 xxxx xxxx / email@example.com"
              required
            />
          </Field>
        </div>

        <div className="md:col-span-2">
          <Field label="想達成的目標（可選）">
            <textarea
              value={form.goal}
              onChange={(e) => setForm((p) => ({ ...p, goal: e.target.value }))}
              className="min-h-[90px] w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="例如：想做一個英文作文小助手／想了解 AI 怎麼用在 App 上"
            />
          </Field>
        </div>

        <div className="md:col-span-2">
          <Field label="期望上課時間（可選）">
            <input
              value={form.preferredTime}
              onChange={(e) => setForm((p) => ({ ...p, preferredTime: e.target.value }))}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="例如：週末下午 / 平日晚上"
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="mt-4 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50 hover:bg-slate-800"
      >
        {status === 'sending' ? '提交中…' : '提交'}
      </button>
    </form>
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
