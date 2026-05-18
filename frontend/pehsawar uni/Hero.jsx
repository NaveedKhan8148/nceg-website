import { useState, useEffect, useRef, useCallback } from "react";

const SLIDES = [
  { tag: "Campus & Facilities",   title: ["National Centre of", "Excellence in Geology"], desc: "A premier institution advancing earth sciences research and education at the University of Peshawar, KPK, Pakistan.", caption: "University of Peshawar · KPK · Pakistan",      src: "https://nceg.uop.edu.pk/images/Sliders/slider0.jpg",   fallbackIcon: "🏔️" },
  { tag: "Laboratory Facilities", title: ["State-of-the-Art",  "Research Labs"],          desc: "14 cutting-edge laboratories equipped for frontier geoscience research and analysis.",                              caption: "14 World-Class Laboratories",                         src: "https://nceg.uop.edu.pk/images/Sliders/slider1.jpeg",  fallbackIcon: "🔬" },
  { tag: "Field Research",        title: ["Geological",        "Field Studies"],           desc: "Hands-on geological fieldwork across Pakistan's diverse and complex terrain.",                                     caption: "Field Studies · Pakistan",                            src: "https://nceg.uop.edu.pk/images/Sliders/slider2.jpeg",  fallbackIcon: "🌍" },
  { tag: "Academic Excellence",   title: ["Graduate",          "Programs"],                desc: "MS/M.Phil. and Ph.D. programs shaping the next generation of earth scientists.",                                   caption: "MS · M.Phil. · Ph.D. Programs",                       src: "https://nceg.uop.edu.pk/images/Sliders/slider3.jpeg",  fallbackIcon: "🎓" },
  { tag: "GIS & Remote Sensing",  title: ["G-SAG",             "Laboratory"],              desc: "GIS & Space Applications in Geosciences — HEC-funded, cutting-edge spatial research.",                            caption: "G-SAG Lab · HEC Funded",                              src: "https://nceg.uop.edu.pk/images/Sliders/slider4.jpeg",  fallbackIcon: "🛰️" },
  { tag: "Geological Samples",    title: ["Rock & Mineral",    "Collections"],             desc: "Extensive geological sample collections supporting teaching and research activities.",                              caption: "Geological Collections · NCEG",                       src: "https://nceg.uop.edu.pk/images/Sliders/slider5.jpeg",  fallbackIcon: "🪨" },
  { tag: "Research Instruments",  title: ["Advanced",          "Instrumentation"],         desc: "XRF, XRD, SEM and other advanced analytical instruments for precise geochemical analysis.",                       caption: "XRF · XRD · SEM Analysis",                            src: "https://nceg.uop.edu.pk/images/Sliders/slider6.jpeg",  fallbackIcon: "⚡" },
  { tag: "Seismology Lab",        title: ["Seismic",           "Research"],                desc: "Monitoring and studying seismic activity in the Pamir-Hindu Kush and surrounding regions.",                       caption: "Hydro-Geophysics & Seismology",                        src: "https://nceg.uop.edu.pk/images/Sliders/slider7.jpeg",  fallbackIcon: "📡" },
  { tag: "Gemology Lab",          title: ["Gemology",          "Laboratory"],              desc: "Pakistan hosts some of the world's finest gemstones. NCEG leads gemological research.",                           caption: "Gemology · Pakistan's Gem Heritage",                  src: "https://nceg.uop.edu.pk/images/Sliders/slider8.jpeg",  fallbackIcon: "💎" },
  { tag: "NCEG Building",         title: ["Historic",          "Institution"],             desc: "Established decades ago, NCEG remains Pakistan's foremost centre for geological sciences.",                        caption: "NCEG · Est. 1970s",                                   src: "https://nceg.uop.edu.pk/images/Sliders/slider9.jpeg",  fallbackIcon: "🏛️" },
  { tag: "Global Collaboration",  title: ["International",     "Partnerships"],            desc: "Active MoUs and research collaborations with leading universities and institutions worldwide.",                     caption: "Global Research Network · MoUs",                      src: "https://nceg.uop.edu.pk/images/Sliders/slider10.jpeg", fallbackIcon: "🌐" },
];

const DELAY = 4000;

function Thumb({ slide, index, active, onClick }) {
  const [err, setErr] = useState(false);
  return (
    <button
      onClick={onClick}
      className={`relative flex-shrink-0 rounded overflow-hidden border-2 transition-all duration-300 focus:outline-none ${
        active ? "border-[#C9A84C] opacity-100 scale-105" : "border-transparent opacity-45 hover:opacity-75 hover:scale-102"
      }`}
      style={{ width: 64, height: 44 }}
      aria-label={`Go to slide ${index + 1}: ${slide.tag}`}
    >
      {!err ? (
        <img src={slide.src} alt={slide.tag} className="w-full h-full object-cover" onError={() => setErr(true)} />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#0D9488]/20 to-[#0B1220] flex items-center justify-center" style={{ fontSize: 18 }}>
          {slide.fallbackIcon}
        </div>
      )}
      <span className={`absolute bottom-0.5 right-1 font-mono-custom text-[8px] leading-none ${active ? "text-[#C9A84C]" : "text-white/30"}`}>
        {String(index + 1).padStart(2, "0")}
      </span>
      {active && <div className="absolute inset-0 border border-[#C9A84C] rounded pointer-events-none" />}
    </button>
  );
}

function SlideImage({ slide, active }) {
  const [err, setErr] = useState(false);
  return (
    <div className={`absolute inset-0 transition-opacity duration-700 ${active ? "opacity-100" : "opacity-0"}`}>
      {!err ? (
        <img
          src={slide.src}
          alt={slide.tag}
          className="w-full h-full object-cover"
          onError={() => setErr(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0D1929] to-[#0B1220]">
          <span style={{ fontSize: 64 }} className="mb-4">{slide.fallbackIcon}</span>
          <span className="font-mono-custom text-[10px] tracking-widest uppercase text-slate-500">{slide.tag}</span>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const [cur, setCur]             = useState(0);
  const [playing, setPlaying]     = useState(true);
  const [visible, setVisible]     = useState(true);
  const [progress, setProgress]   = useState(0);
  const timerRef    = useRef(null);
  const progRef     = useRef(null);
  const thumbsRef   = useRef(null);

  const clearTimers = useCallback(() => {
    clearInterval(timerRef.current);
    clearInterval(progRef.current);
  }, []);

  const startProgress = useCallback(() => {
    setProgress(0);
    clearInterval(progRef.current);
    const STEP = 50;
    const inc = (STEP / DELAY) * 100;
    progRef.current = setInterval(() => setProgress(p => Math.min(p + inc, 100)), STEP);
  }, []);

  const goTo = useCallback((raw) => {
    const next = ((raw % SLIDES.length) + SLIDES.length) % SLIDES.length;
    setVisible(false);
    setTimeout(() => {
      setCur(next);
      setVisible(true);
      if (thumbsRef.current) {
        const el = thumbsRef.current.children[next];
        if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }, 260);
  }, []);

  const startAuto = useCallback(() => {
    clearTimers();
    startProgress();
    timerRef.current = setInterval(() => {
      goTo(cur + 1);
      startProgress();
    }, DELAY);
  }, [clearTimers, startProgress, goTo, cur]);

  useEffect(() => {
    if (playing) startAuto();
    else clearTimers();
    return clearTimers;
  }, [playing, cur, startAuto, clearTimers]);

  const navigate = (dir) => {
    clearTimers();
    goTo(cur + dir);
    if (playing) startProgress();
  };

  const jumpTo = (i) => {
    clearTimers();
    goTo(i);
    if (playing) startProgress();
  };

  const slide = SLIDES[cur];

  return (
    <section id="home" className="relative select-none">

      {/* ── MAIN SLIDE ─────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden bg-[#0B1220]" style={{ height: "clamp(360px, 50vw, 500px)" }}>

        {/* Images */}
        {SLIDES.map((s, i) => <SlideImage key={i} slide={s} active={i === cur} />)}

        {/* Overlays */}
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to right, rgba(11,18,32,0.93) 0%, rgba(11,18,32,0.55) 50%, rgba(11,18,32,0.1) 100%)" }} />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(11,18,32,0.88) 0%, transparent 55%)" }} />

        {/* Corner geo accents */}
        <div className="absolute top-0 right-0 z-[2] pointer-events-none"
          style={{ width: 0, height: 0, borderTop: "150px solid rgba(201,168,76,0.05)", borderLeft: "220px solid transparent" }} />
        <div className="absolute top-0 right-0 z-[2] pointer-events-none"
          style={{ width: 0, height: 0, borderTop: "70px solid rgba(13,148,136,0.07)", borderLeft: "110px solid transparent" }} />

        {/* Left accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] z-[3]"
          style={{ background: "linear-gradient(180deg, #C9A84C 0%, #0D9488 60%, transparent 100%)" }} />

        {/* ── CONTENT ── */}
        <div
          className="absolute top-0 bottom-0 left-0 z-[5] flex flex-col justify-center px-8 md:px-12"
          style={{
            width: "clamp(300px, 52%, 560px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 350ms ease, transform 350ms ease",
          }}
        >
          {/* Tag line */}
          <div className="flex items-center gap-2 mb-4">
            <span className="block h-px w-6 bg-[#C9A84C]" />
            <span className="font-mono-custom text-[9px] tracking-[0.2em] uppercase text-[#C9A84C]">{slide.tag}</span>
          </div>

          {/* Title */}
          <h2 className="font-display font-bold text-white leading-tight mb-3" style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}>
            {slide.title[0]}
            <br />
            <span className="text-gradient-gold">{slide.title[1]}</span>
          </h2>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed mb-6 max-w-sm" style={{ fontSize: "clamp(11px, 1.1vw, 13px)" }}>
            {slide.desc}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <a href="#" className="px-5 py-2.5 bg-[#C9A84C] text-[#0B1220] font-bold rounded hover:bg-[#E8C97A] transition-colors" style={{ fontSize: 11 }}>
              Explore NCEG
            </a>
            <a href="#" className="px-5 py-2.5 border border-[rgba(13,148,136,0.5)] text-[#14B8A6] font-semibold rounded hover:border-[#14B8A6] hover:bg-[rgba(13,148,136,0.08)] transition-all" style={{ fontSize: 11 }}>
              Our Research
            </a>
          </div>
        </div>

        {/* ── SLIDE COUNTER ── */}
        <div className="absolute top-4 right-4 z-[6] font-mono-custom text-xs text-white/35 leading-none">
          <span className="text-[#C9A84C] font-bold" style={{ fontSize: 15 }}>{String(cur + 1).padStart(2, "0")}</span>
          <span className="mx-1">/</span>
          {String(SLIDES.length).padStart(2, "0")}
        </div>

        {/* ── PREV / NEXT ── */}
        <button
          onClick={() => navigate(-1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-[6] w-9 h-9 rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(11,18,32,0.6)] text-[#C9A84C] flex items-center justify-center hover:bg-[rgba(201,168,76,0.15)] hover:border-[#C9A84C] transition-all focus:outline-none"
        >
          ←
        </button>
        <button
          onClick={() => navigate(1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-[6] w-9 h-9 rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(11,18,32,0.6)] text-[#C9A84C] flex items-center justify-center hover:bg-[rgba(201,168,76,0.15)] hover:border-[#C9A84C] transition-all focus:outline-none"
        >
          →
        </button>

        {/* ── PROGRESS BAR ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06] z-[6]">
          <div
            className="h-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #C9A84C, #14B8A6)",
              transition: "width 50ms linear",
            }}
          />
        </div>

        {/* ── CAPTION PILL ── */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[6]">
          <span
            className="font-mono-custom text-white/40 tracking-wider border border-[rgba(201,168,76,0.12)] bg-[rgba(11,18,32,0.65)] rounded-full px-4 py-1.5"
            style={{ fontSize: 9 }}
          >
            {slide.caption}
          </span>
        </div>
      </div>

      {/* ── THUMBNAIL STRIP ─────────────────────────────────────────── */}
      <div className="bg-[#070E1A] border-t border-b border-[rgba(201,168,76,0.1)] px-4 py-2.5 flex items-center gap-3">

        {/* Gallery label */}
        <span className="font-mono-custom text-[9px] tracking-[0.15em] uppercase text-slate-600 flex-shrink-0 hidden sm:block">
          Gallery
        </span>

        {/* Thumbnails */}
        <div
          ref={thumbsRef}
          className="flex gap-2 flex-1 overflow-x-auto pb-0.5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SLIDES.map((s, i) => (
            <Thumb key={i} slide={s} index={i} active={i === cur} onClick={() => jumpTo(i)} />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="hidden lg:flex items-center gap-1.5 flex-shrink-0">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full border transition-all duration-300 focus:outline-none ${
                i === cur
                  ? "bg-[#C9A84C] border-[#C9A84C]"
                  : "bg-transparent border-[rgba(201,168,76,0.2)] hover:border-[rgba(201,168,76,0.6)]"
              }`}
              style={{ width: i === cur ? 16 : 7, height: 7 }}
            />
          ))}
        </div>

        {/* Play / Pause */}
        <button
          onClick={() => setPlaying(p => !p)}
          title={playing ? "Pause slideshow" : "Play slideshow"}
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all focus:outline-none ${
            playing
              ? "border-[rgba(255,255,255,0.08)] text-slate-600 hover:border-[rgba(201,168,76,0.4)] hover:text-[#C9A84C]"
              : "border-[rgba(201,168,76,0.35)] text-[#C9A84C]"
          }`}
          style={{ fontSize: 10 }}
        >
          {playing ? "⏸" : "▶"}
        </button>
      </div>
    </section>
  );
}