import { stats } from "../data/data";

export default function StatsBar() {
  return (
    <section className="bg-[#0D1929] border-y border-[rgba(201,168,76,0.15)]">
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(201,168,76,0.1)]">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center py-3 px-4">
            <span className="text-xl mb-1">{s.icon}</span>
            <span className="font-display text-2xl font-bold text-gradient-gold mb-0.5">{s.value}</span>
            <span className="text-slate-400 text-[10px] text-center font-mono-custom tracking-wide uppercase">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}