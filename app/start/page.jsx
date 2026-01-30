import Link from 'next/link';

export default function StartPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h1 className="text-2xl font-bold">开始学习</h1>
        <p className="mt-2 text-slate-700">
          这套课程不依赖收费的 App 平台。你只需要：浏览器 + 一个 AI 工具，就能做出作品。
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-base font-bold">① 打开课程</div>
            <p className="mt-2 text-sm text-slate-700">从第 1 课开始，按“步骤清单”做。</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-base font-bold">② 下载模板</div>
            <p className="mt-2 text-sm text-slate-700">每节课都有模板/资源，下载后直接在浏览器运行。</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-base font-bold">③ 用 AI 逐步完善</div>
            <p className="mt-2 text-sm text-slate-700">一次只让 AI 做一小步，复制结果到代码里。</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/lesson/l1-first-app" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            进入第 1 课：做出第一个 App
          </Link>
          <Link href="/prompt" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            打开 AI / Prompt 工具
          </Link>
          <Link href="/course" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            查看课程地图
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-xl font-bold">老师/甲方测试建议</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>只测试第 1 课：看学生能否“下载模板 → 运行 → 修改 → 完成作品”。</li>
          <li>全程不要提示学生点哪里，记录他们卡住的句子。</li>
          <li>把卡点反馈给我们，用来优化课程文本。</li>
        </ol>
      </section>
    </div>
  );
}
