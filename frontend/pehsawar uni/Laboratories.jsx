import { laboratories } from "../data/data";

export default function Laboratories() {
  return (
    <section className="py-20 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(13,148,136,0.3)] to-transparent" />
          <div className="text-center">
            <span className="text-[#14B8A6] text-xs font-mono-custom tracking-[0.2em] uppercase block mb-1">Infrastructure</span>
            <h2 className="font-display text-3xl font-bold text-white">Our Laboratories</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(13,148,136,0.3)] to-transparent" />
        </div>
        <p className="text-slate-400 text-center text-sm mb-12 max-w-2xl mx-auto">
          14 state-of-the-art research facilities equipped with cutting-edge instruments for frontier geoscience research
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {laboratories.map((lab, i) => (
            <a
              key={i}
              href="#"
              className="lab-card rounded-lg p-4 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className={`text-3xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {lab.icon}
              </div>
              <div className={`text-xs font-mono-custom font-bold tracking-widest mb-1 ${lab.color === "gold" ? "text-[#C9A84C]" : "text-[#14B8A6]"}`}>
                {lab.abbr}
              </div>
              <div className="text-slate-400 text-[10px] leading-tight group-hover:text-slate-200 transition-colors">
                {lab.name}
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(13,148,136,0.4)] text-[#14B8A6] text-sm font-semibold rounded hover:border-[#14B8A6] hover:bg-[rgba(13,148,136,0.08)] transition-all"
          >
            Explore All Laboratories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
