export default function Card({ title, desc, children, footer }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {title ? <div className="text-lg font-semibold">{title}</div> : null}
      {desc ? <p className="mt-2 text-sm text-slate-600">{desc}</p> : null}
      {children ? <div className="mt-4">{children}</div> : null}
      {footer ? <div className="mt-6 border-t border-slate-200 pt-4">{footer}</div> : null}
    </div>
  );
}
