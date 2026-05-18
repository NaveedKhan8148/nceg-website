export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = {
    Academics: [
      "Academic Program",
      "Courses",
      "Academic Committee",
      "Graduate Studies Committee",
      "Students Guidelines",
    ],
    Research: [
      "Publications",
      "Research Projects",
      "Books & Special Volumes",
      "Research Journal (JHES)",
      "G-SAG Lab",
    ],
    "Prospective Students": [
      "Admission Schedule",
      "Eligibility Criteria",
      "Fee Structure",
      "Loan / Scholarships",
      "Hostel Facility",
    ],
    People: [
      "Board of Governors",
      "Faculty",
      "Office Staff",
      "Technical Staff",
      "Faculty Login",
    ],
  };

  return (
    <footer className="bg-[#070E1A] border-t border-[rgba(201,168,76,0.15)]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#8B6914] flex items-center justify-center text-white font-display font-bold">
                N
              </div>
              <div>
                <div className="font-display text-white text-sm font-semibold">NCEG</div>
                <div className="text-[#C9A84C] text-[10px] font-mono-custom tracking-wider uppercase">University of Peshawar</div>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              National Centre of Excellence in Geology — a premier institution advancing earth sciences research and education in Pakistan since the 1970s.
            </p>

            {/* Contact */}
            <div className="space-y-2 text-xs text-slate-500">
              <div className="flex items-start gap-2">
                <span className="text-[#C9A84C] mt-0.5">📍</span>
                <span>National Centre of Excellence in Geology,<br />University of Peshawar, Peshawar-25130<br />Khyber Pakhtunkhwa, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C9A84C]">📞</span>
                <span>+92-91-9221254 / 9221256</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C9A84C]">📠</span>
                <span>Fax: +92-91-9221228</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C9A84C]">✉️</span>
                <span>s.sajidshah@uop.edu.pk</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4 pb-2 border-b border-[rgba(201,168,76,0.15)]">
                {section}
              </h4>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-slate-500 hover:text-[#C9A84C] text-xs transition-colors leading-relaxed block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Journal highlight strip */}
      <div className="border-y border-[rgba(13,148,136,0.2)] bg-[rgba(13,148,136,0.05)] px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-400">
            📖 <span className="text-[#14B8A6] font-semibold">JHES Vol 59(1), 2026</span> — Now Available Online
          </span>
          <a href="#" className="text-[#14B8A6] hover:text-white transition-colors font-mono-custom underline underline-offset-4">
            Access Journal →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-600 text-xs font-mono-custom">
          © 2006–{year} National Centre of Excellence in Geology, University of Peshawar. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-600">
          <a href="#" className="hover:text-[#C9A84C] transition-colors">About Us</a>
          <span>|</span>
          <a href="#" className="hover:text-[#C9A84C] transition-colors">Contact Us</a>
          <span>|</span>
          <a href="#" className="hover:text-[#C9A84C] transition-colors">Site Map</a>
        </div>
      </div>
    </footer>
  );
}
