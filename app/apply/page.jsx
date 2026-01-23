import ApplyForm from '../../components/ApplyForm';

export const metadata = {
  title: '報名｜AI App Maker',
};

export default function ApplyPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">報名 / 諮詢</h1>
        <p className="mt-2 text-sm text-slate-700">
          填寫後我們會聯絡你（教學版：提交會打到 /api/apply）。正式運營建議接入 Google Sheet/Supabase。
        </p>
      </div>

      <ApplyForm />
    </div>
  );
}
