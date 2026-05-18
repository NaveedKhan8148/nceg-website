import { usefulLinks } from "../data/data";

export default function UsefulLinks() {
  return (
    <section className="py-12 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(13,148,136,0.3)] to-transparent" />
          <div className="text-center">
            <span className="text-[#14B8A6] text-[10px] font-mono-custom tracking-[0.2em] uppercase block mb-1">Quick Access</span>
            <h2 className="font-display text-2xl font-bold text-white">Useful Links</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(13,148,136,0.3)] to-transparent" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-8">
          {usefulLinks.map((link, i) => (
            <a key={i} href={link.href}
              className="flex items-center gap-2 p-3 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#111827] hover:border-[rgba(13,148,136,0.4)] hover:bg-[rgba(13,148,136,0.05)] transition-all group">
              <span className="text-base flex-shrink-0">{link.icon}</span>
              <div className="flex-1 min-w-0">
                <span className="text-[11px] text-slate-300 group-hover:text-white transition-colors block truncate">{link.label}</span>
                {link.isNew && <span className="text-[9px] text-[#C9A84C] font-mono-custom font-bold">● NEW</span>}
              </div>
            </a>
          ))}
        </div>

        {/* Admission CTA */}
        <div className="relative rounded-xl overflow-hidden border border-[rgba(201,168,76,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2a1a] to-[#1a2332]" />
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="relative px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[#C9A84C] text-[9px] font-mono-custom tracking-widest uppercase block mb-1.5">Admissions 2026</span>
              <h3 className="font-display text-xl font-bold text-white mb-1.5">Apply for MS/M.Phil. & Ph.D.</h3>
              <p className="text-slate-400 text-[12px] max-w-md">
                Join Pakistan's premier geology institution. Applications are open for graduate programs in Geology and Earth Sciences.
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <a href="#" className="px-5 py-2.5 bg-[#C9A84C] text-slate-950 font-bold text-[12px] rounded hover:bg-[#E8C97A] transition-colors whitespace-nowrap">Apply Now</a>
              <a href="#" className="px-5 py-2.5 border border-[rgba(255,255,255,0.2)] text-slate-300 text-[12px] rounded hover:border-white hover:text-white transition-all whitespace-nowrap">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}