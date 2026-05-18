import { newsUpdates } from "../data/data";

const tagColors = {
  Workshop: "bg-purple-900/40 text-purple-300 border-purple-700/30",
  Recruitment: "bg-amber-900/40 text-amber-300 border-amber-700/30",
  Journal: "bg-teal-900/40 text-teal-300 border-teal-700/30",
  Conference: "bg-blue-900/40 text-blue-300 border-blue-700/30",
  Visit: "bg-green-900/40 text-green-300 border-green-700/30",
  Publication: "bg-rose-900/40 text-rose-300 border-rose-700/30",
};

export default function NewsUpdates() {
  const featured = newsUpdates[0];
  const rest = newsUpdates.slice(1);

  return (
    <section className="py-20 bg-[#0D1929]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
          <div className="text-center">
            <span className="text-[#C9A84C] text-xs font-mono-custom tracking-[0.2em] uppercase block mb-1">
              What's Happening
            </span>
            <h2 className="font-display text-3xl font-bold text-white">News & Updates</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured news card */}
          <div className="lg:col-span-1 relative rounded-xl overflow-hidden border border-[rgba(201,168,76,0.2)] bg-gradient-to-br from-[#1a2332] to-[#111827] p-6 flex flex-col group hover:border-[rgba(201,168,76,0.5)] transition-all">
            {/* Animated pulse dot */}
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A84C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A84C]"></span>
              </span>
              <span className="text-xs text-[#C9A84C] font-mono-custom tracking-widest uppercase">Latest</span>
            </div>

            <span className={`self-start text-[10px] font-mono-custom px-2 py-0.5 rounded border mb-4 ${tagColors[featured.tag] || "bg-slate-800 text-slate-300 border-slate-700"}`}>
              {featured.tag}
            </span>

            <h3 className="font-display text-xl font-semibold text-white leading-snug mb-4 group-hover:text-[#C9A84C] transition-colors flex-1">
              {featured.title}
            </h3>

            <div className="mt-auto">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono-custom">{featured.date}</span>
                <a href="#" className="text-xs text-[#C9A84C] hover:text-white transition-colors flex items-center gap-1">
                  Read More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[rgba(201,168,76,0.2)] rounded-tr-xl" />
          </div>

          {/* News list */}
          <div className="lg:col-span-2 space-y-3">
            {rest.map((news) => (
              <a
                key={news.id}
                href="#"
                className="flex items-start gap-4 p-4 rounded-lg border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(201,168,76,0.3)] hover:bg-[rgba(201,168,76,0.03)] transition-all group"
              >
                {/* Date badge */}
                <div className="flex-shrink-0 text-center min-w-[52px]">
                  <div className="text-[10px] text-slate-500 font-mono-custom uppercase">{news.date.split(" ")[0]}</div>
                  <div className="text-sm font-bold text-slate-300 font-mono-custom">{news.date.split(" ")[1]}</div>
                </div>

                {/* Divider */}
                <div className="w-px self-stretch bg-[rgba(201,168,76,0.15)]" />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono-custom px-2 py-0.5 rounded border ${tagColors[news.tag] || "bg-slate-800 text-slate-300 border-slate-700"}`}>
                      {news.tag}
                    </span>
                    {news.isNew && (
                      <span className="text-[10px] font-bold text-[#C9A84C] font-mono-custom animate-pulse">NEW</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors leading-snug truncate">
                    {news.title}
                  </p>
                </div>

                <svg className="w-4 h-4 text-slate-600 group-hover:text-[#C9A84C] transition-colors flex-shrink-0 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            <div className="pt-2 text-right">
              <a href="#" className="text-xs text-[#C9A84C] hover:text-[#E8C97A] font-mono-custom tracking-wide underline underline-offset-4">
                View All News & Archives →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
