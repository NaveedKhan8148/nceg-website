import { useState, useEffect } from "react";
import { navItems } from "../data/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#070E1A] border-b border-[rgba(201,168,76,0.15)] px-6 py-2 flex items-center justify-between text-xs font-mono-custom">
        <span className="text-[#C9A84C] tracking-widest uppercase">
          National Centre of Excellence in Geology
        </span>
        <div className="hidden md:flex items-center gap-4 text-slate-400">
          <a href="#" className="hover:text-[#C9A84C] transition-colors">About Us</a>
          <span className="text-slate-700">|</span>
          <a href="#" className="hover:text-[#C9A84C] transition-colors">Our Vision</a>
          <span className="text-slate-700">|</span>
          <a href="#" className="hover:text-[#C9A84C] transition-colors">Our Mission</a>
          <span className="text-slate-700">|</span>
          <a href="#" className="hover:text-[#C9A84C] transition-colors">Contact Us</a>
        </div>
      </div>

      {/* Logo Header */}
      <div className={`transition-all duration-500 ${scrolled ? "py-2 bg-[#070E1A]/95 backdrop-blur-md" : "py-4 bg-[#0B1220]"} border-b border-[rgba(201,168,76,0.1)] px-6 flex items-center justify-between z-50 sticky top-0`}
        style={{ position: scrolled ? "sticky" : "relative", top: 0, zIndex: 100 }}>
        <div className="flex items-center gap-4">
          {/* Logo placeholder - monogram */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#8B6914] flex items-center justify-center text-white font-display font-bold text-xl shadow-lg flex-shrink-0">
            N
          </div>
          <div>
            <h1 className="font-display text-white text-lg font-semibold leading-tight">
              National Centre of Excellence in Geology
            </h1>
            <p className="text-[#C9A84C] text-xs font-mono-custom tracking-widest uppercase">
              University of Peshawar · Est. 1970s
            </p>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className={`w-6 h-0.5 bg-[#C9A84C] mb-1.5 transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-[#C9A84C] mb-1.5 transition-all ${mobileOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-[#C9A84C] transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* Main Nav */}
      <nav className="hidden md:block bg-[#0D1929] border-b border-[rgba(201,168,76,0.2)] sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center flex-wrap">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(i)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href || "#"}
                  className="flex items-center gap-1 px-3 py-3.5 text-sm text-slate-300 hover:text-[#C9A84C] transition-colors font-medium nav-link whitespace-nowrap"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown */}
                {item.children && activeDropdown === i && (
                  <div className="absolute top-full left-0 min-w-[260px] bg-[#0D1929] border border-[rgba(201,168,76,0.2)] shadow-2xl z-50 animate-fade-in">
                    <div className="h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#0D9488]" />
                    {item.children.map((child, j) => (
                      <div key={j} className="group/child relative">
                        <a
                          href={child.href || "#"}
                          className="flex items-center justify-between px-4 py-2.5 text-sm text-slate-300 hover:text-[#C9A84C] hover:bg-[rgba(201,168,76,0.05)] transition-all border-b border-[rgba(255,255,255,0.04)]"
                        >
                          {child.label}
                          {child.children && (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </a>
                        {/* Sub-dropdown */}
                        {child.children && (
                          <div className="absolute left-full top-0 min-w-[240px] bg-[#0D1929] border border-[rgba(201,168,76,0.2)] shadow-2xl hidden group-hover/child:block">
                            <div className="h-0.5 bg-gradient-to-r from-[#0D9488] to-[#C9A84C]" />
                            {child.children.map((sub, k) => (
                              <a key={k} href={sub.href || "#"}
                                className="block px-4 py-2.5 text-sm text-slate-300 hover:text-[#C9A84C] hover:bg-[rgba(201,168,76,0.05)] transition-all border-b border-[rgba(255,255,255,0.04)]">
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D1929] border-b border-[rgba(201,168,76,0.2)] z-40 max-h-screen overflow-y-auto">
          {navItems.map((item, i) => (
            <div key={i}>
              <a href={item.href || "#"} className="block px-6 py-3 text-sm text-slate-300 hover:text-[#C9A84C] border-b border-[rgba(255,255,255,0.05)]">
                {item.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
