export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container py-10">
        <div className="text-sm font-semibold">中学生 AI 做 App 课程</div>
        <p className="mt-2 text-sm text-slate-600">
          提示：本网站是学习指南。AI 生成内容可能有错，请同学自己核对（尤其是题目与答案）。
        </p>
        <div className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} 示例站点</div>
      </div>
    </footer>
  );
}
