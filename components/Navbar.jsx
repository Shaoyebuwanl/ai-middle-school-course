import Link from 'next/link';

const NavLink = ({ href, children }) => (
  <Link href={href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900">
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">中学生 AI 做 App</div>
            <div className="text-xs text-slate-500">按步骤做，不迷路</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink href="/start">开始</NavLink>
          <NavLink href="/course">课程地图</NavLink>
          <NavLink href="/prompt">Prompt 工具</NavLink>
          <NavLink href="/progress">我的进度</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/start" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            立即开始
          </Link>
        </div>
      </div>
    </header>
  );
}
