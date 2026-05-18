export default function DirectorMessage() {
  return (
    <section className="py-12 bg-[#0D1929] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="700" cy="100" r="300" fill="none" stroke="#C9A84C" strokeWidth="1" />
          <circle cx="700" cy="100" r="200" fill="none" stroke="#C9A84C" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
          <div className="text-center">
            <span className="text-[#C9A84C] text-[10px] font-mono-custom tracking-[0.2em] uppercase block mb-1">Leadership</span>
            <h2 className="font-display text-2xl font-bold text-white">Director's Message</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Photo card */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-36 h-36 rounded-full border-2 border-[rgba(201,168,76,0.4)] p-1.5">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
              </div>
              <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#C9A84C] border-2 border-[#0D1929]" />
            </div>
            <h3 className="font-display text-base font-semibold text-white mb-0.5">Prof. Dr. Director</h3>
            <p className="text-[#C9A84C] text-[9px] font-mono-custom tracking-widest uppercase mb-4">Director, NCEG</p>
            <div className="w-full border border-[rgba(201,168,76,0.15)] rounded p-3 bg-[rgba(201,168,76,0.03)]">
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                {[["Position","Director & Professor"],["Department","NCEG, UoP"],["Specialization","Earth Sciences"],["Email","director@nceg.uop.edu.pk"]].map(([l,v]) => (
                  <div key={l}>
                    <div className="text-slate-500 mb-0.5 text-[10px]">{l}</div>
                    <div className="text-slate-300 text-[11px]">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="lg:col-span-2">
            <div className="text-[#C9A84C] font-display text-6xl leading-none opacity-20 mb-1">"</div>
            <div className="space-y-3 text-slate-300 text-[13px] leading-relaxed">
              <p>The National Centre of Excellence in Geology (NCEG) is one of the most prestigious institutions of Earth Sciences in the country. Established at the University of Peshawar, NCEG has been at the forefront of geological research, education, and scientific advancement for decades.</p>
              <p>We house state-of-the-art laboratories where cutting-edge research is conducted across disciplines including geochemistry, seismology, hydrogeology, GIS & remote sensing, gemology, and environmental geology.</p>
              <p>Our graduate programs — MS/M.Phil. and Ph.D. — attract talented students from across Pakistan and abroad. The centre is committed to producing scholars equipped to tackle Pakistan's pressing geological and environmental challenges.</p>
              <p className="text-[#14B8A6]">I warmly invite prospective students, researchers, and collaborators to explore NCEG's rich academic environment and join us in our mission of scientific excellence.</p>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-[rgba(201,168,76,0.4)] to-transparent" />
              <div className="text-right">
                <div className="font-display text-sm italic text-[#C9A84C]">Prof. Dr. Director</div>
                <div className="text-[10px] text-slate-500 font-mono-custom">National Centre of Excellence in Geology</div>
              </div>
            </div>
            <a href="#" className="inline-flex items-center gap-1.5 mt-4 text-[12px] text-[#C9A84C] hover:text-[#E8C97A] border border-[rgba(201,168,76,0.3)] hover:border-[#C9A84C] px-4 py-2 rounded transition-all">
              Read Full Message
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}