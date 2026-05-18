import { useState } from "react";
import { ongoingProjects, latestResearch } from "../data/data";

function ProjectAccordion({ projects }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-2">
      {projects.map((p) => (
        <div key={p.id} className="research-card rounded overflow-hidden bg-[#111827]">
          <button
            onClick={() => setOpen(open === p.id ? null : p.id)}
            className="w-full text-left px-4 py-3 flex items-start justify-between gap-3 group"
          >
            <span className="text-sm text-slate-200 group-hover:text-[#C9A84C] transition-colors font-medium leading-snug">
              {p.title}
            </span>
            <span className={`flex-shrink-0 w-5 h-5 rounded-full border border-[rgba(201,168,76,0.4)] flex items-center justify-center text-[#C9A84C] text-xs transition-transform ${open === p.id ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
          {open === p.id && (
            <div className="px-4 pb-4 border-t border-[rgba(201,168,76,0.1)] pt-3 animate-slide-in">
              <div className="grid grid-cols-1 gap-1.5 text-xs">
                <div className="flex gap-2">
                  <span className="text-[#C9A84C] font-semibold w-20 flex-shrink-0">PI:</span>
                  <span className="text-slate-300">{p.pi}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#C9A84C] font-semibold w-20 flex-shrink-0">Sponsor:</span>
                  <span className="text-slate-300">{p.sponsor}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#C9A84C] font-semibold w-20 flex-shrink-0">Duration:</span>
                  <span className="text-slate-300">{p.duration}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ResearchAccordion({ papers }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-2">
      {papers.map((p) => (
        <div key={p.id} className="research-card rounded overflow-hidden bg-[#111827]">
          <button
            onClick={() => setOpen(open === p.id ? null : p.id)}
            className="w-full text-left px-4 py-3 flex items-start justify-between gap-3 group"
          >
            <div>
              <p className="text-xs text-[#14B8A6] mb-1 font-mono-custom">{p.authors}</p>
              <p className="text-sm text-slate-200 group-hover:text-white transition-colors font-medium leading-snug">
                {p.title}
              </p>
            </div>
            <span className={`flex-shrink-0 w-5 h-5 rounded-full border border-[rgba(13,148,136,0.4)] flex items-center justify-center text-[#14B8A6] text-xs transition-transform ${open === p.id ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
          {open === p.id && (
            <div className="px-4 pb-4 border-t border-[rgba(13,148,136,0.1)] pt-3 animate-slide-in">
              <p className="text-xs text-[#C9A84C] mb-2">{p.journal}</p>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#14B8A6] hover:text-white transition-colors border border-[rgba(13,148,136,0.3)] hover:border-[#14B8A6] px-3 py-1.5 rounded"
              >
                View Publication
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ResearchAndProjects() {
  return (
    <section className="py-20 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
          <div className="text-center">
            <span className="text-[#C9A84C] text-xs font-mono-custom tracking-[0.2em] uppercase block mb-1">Knowledge Hub</span>
            <h2 className="font-display text-3xl font-bold text-white">Research & Projects</h2>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(13,148,136,0.3)] to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ongoing Projects */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-[#C9A84C] to-[#8B6914] rounded-full" />
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Ongoing Projects</h3>
                <p className="text-xs text-slate-500 font-mono-custom">{ongoingProjects.length} active research projects</p>
              </div>
            </div>
            <ProjectAccordion projects={ongoingProjects} />
          </div>

          {/* Latest Research */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-[#0D9488] to-[#065F46] rounded-full" />
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Latest Research</h3>
                <p className="text-xs text-slate-500 font-mono-custom">Recent peer-reviewed publications</p>
              </div>
            </div>
            <ResearchAccordion papers={latestResearch} />
            <div className="mt-4 text-right">
              <a href="#" className="text-xs text-[#C9A84C] hover:text-[#E8C97A] font-mono-custom tracking-wide underline underline-offset-4">
                View All Research Publications →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
