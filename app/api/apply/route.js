let SUBMISSIONS = [];

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const payload = {
    parentName: String(body.parentName || ''),
    studentGrade: String(body.studentGrade || ''),
    contact: String(body.contact || ''),
    goal: String(body.goal || ''),
    preferredTime: String(body.preferredTime || ''),
    createdAt: new Date().toISOString()
  };

  // 最小校驗
  if (!payload.contact.trim()) {
    return Response.json({ ok: false, error: '請填寫聯絡方式' }, { status: 400 });
  }

  // 教學/示範版：暫存於記憶體（Vercel 無法長期寫檔）
  SUBMISSIONS = [payload, ...SUBMISSIONS].slice(0, 200);

  return Response.json({ ok: true });
}

export async function GET() {
  // 方便老師臨時查看（僅示範；正式版建議加密或刪除）
  return Response.json({ count: SUBMISSIONS.length, submissions: SUBMISSIONS });
}
