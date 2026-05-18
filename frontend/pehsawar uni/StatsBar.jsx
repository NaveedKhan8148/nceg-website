import { stats } from "../data/data";

export default function StatsBar() {
  return (
    <section className="bg-[#0D1929] border-y border-[rgba(201,168,76,0.15)]">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(201,168,76,0.1)]">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center py-4 px-6 group">
            <span className="text-3xl mb-2">{s.icon}</span>
            <span className="font-display text-3xl font-bold text-gradient-gold mb-1">{s.value}</span>
            <span className="text-slate-400 text-xs text-center font-mono-custom tracking-wide uppercase">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
