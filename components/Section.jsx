export default function Section({ title, subtitle, children }) {
  return (
    <section className="py-10">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? <p className="mt-2 text-slate-600">{subtitle}</p> : null}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
