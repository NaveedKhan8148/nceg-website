import { usefulLinks } from "../data/data";

export default function UsefulLinks() {
  return (
    <section className="py-20 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(13,148,136,0.3)] to-transparent" />
          <div className="text-center">
            <span className="text-[#14B8A6] text-xs font-mono-custom tracking-[0.2em] uppercase block mb-1">Quick Access</span>
            <h2 className="font-display text-3xl font-bold text-white">Useful Links</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(13,148,136,0.3)] to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {usefulLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="flex items-center gap-3 p-4 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#111827] hover:border-[rgba(13,148,136,0.4)] hover:bg-[rgba(13,148,136,0.05)] transition-all group"
            >
              <span className="text-xl flex-shrink-0">{link.icon}</span>
              <div className="flex-1 min-w-0">
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors block truncate">
                  {link.label}
                </span>
                {link.isNew && (
                  <span className="text-[10px] text-[#C9A84C] font-mono-custom font-bold">● NEW</span>
                )}
              </div>
              <svg className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#14B8A6] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* Admission CTA Banner */}
        <div className="mt-12 relative rounded-xl overflow-hidden border border-[rgba(201,168,76,0.25)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2a1a] to-[#1a2332]" />
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div className="relative px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[#C9A84C] text-xs font-mono-custom tracking-widest uppercase block mb-2">Admissions 2026</span>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Apply for MS/M.Phil. & Ph.D.</h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Join Pakistan's premier geology institution. Applications are open for graduate programs in Geology and Earth Sciences.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href="#" className="px-6 py-3 bg-[#C9A84C] text-slate-950 font-bold text-sm rounded hover:bg-[#E8C97A] transition-colors whitespace-nowrap">
                Apply Now
              </a>
              <a href="#" className="px-6 py-3 border border-[rgba(255,255,255,0.2)] text-slate-300 text-sm rounded hover:border-white hover:text-white transition-all whitespace-nowrap">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
