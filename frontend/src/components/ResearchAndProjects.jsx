import { useState } from "react";
import { ongoingProjects, latestResearch } from "../data/data";

function SectionHeader({ sub, title, subColor = "gold" }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${subColor === "teal" ? "via-[rgba(13,148,136,0.3)]" : "via-[rgba(201,168,76,0.3)]"} to-transparent`} />
      <div className="text-center">
        <span className={`text-[10px] font-mono-custom tracking-[0.2em] uppercase block mb-1 ${subColor === "teal" ? "text-[#14B8A6]" : "text-[#C9A84C]"}`}>{sub}</span>
        <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className={`h-px flex-1 bg-gradient-to-r from-transparent ${subColor === "teal" ? "via-[rgba(13,148,136,0.3)]" : "via-[rgba(201,168,76,0.3)]"} to-transparent`} />
    </div>
  );
}

function ProjectAccordion({ projects }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-1.5">
      {projects.map((p) => (
        <div key={p.id} className="research-card rounded overflow-hidden bg-[#111827]">
          <button onClick={() => setOpen(open === p.id ? null : p.id)}
            className="w-full text-left px-3 py-2.5 flex items-start justify-between gap-2 group">
            <span className="text-[12px] text-slate-200 group-hover:text-[#C9A84C] transition-colors font-medium leading-snug">
              {p.title}
            </span>
            <span className={`flex-shrink-0 w-4 h-4 rounded-full border border-[rgba(201,168,76,0.4)] flex items-center justify-center text-[#C9A84C] text-xs transition-transform ${open === p.id ? "rotate-45" : ""}`}>+</span>
          </button>
          {open === p.id && (
            <div className="px-3 pb-3 border-t border-[rgba(201,168,76,0.1)] pt-2.5">
              <div className="grid grid-cols-1 gap-1 text-[11px]">
                {[["PI", p.pi], ["Sponsor", p.sponsor], ["Duration", p.duration]].map(([lbl, val]) => (
                  <div key={lbl} className="flex gap-2">
                    <span className="text-[#C9A84C] font-semibold w-16 flex-shrink-0">{lbl}:</span>
                    <span className="text-slate-300">{val}</span>
                  </div>
                ))}
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
    <div className="space-y-1.5">
      {papers.map((p) => (
        <div key={p.id} className="research-card rounded overflow-hidden bg-[#111827]" style={{ borderColor: "rgba(13,148,136,0.1)" }}>
          <button onClick={() => setOpen(open === p.id ? null : p.id)}
            className="w-full text-left px-3 py-2.5 flex items-start justify-between gap-2 group">
            <div>
              <p className="text-[10px] text-[#14B8A6] mb-0.5 font-mono-custom">{p.authors}</p>
              <p className="text-[12px] text-slate-200 group-hover:text-white transition-colors font-medium leading-snug">{p.title}</p>
            </div>
            <span className={`flex-shrink-0 w-4 h-4 rounded-full border border-[rgba(13,148,136,0.4)] flex items-center justify-center text-[#14B8A6] text-xs transition-transform ${open === p.id ? "rotate-45" : ""}`}>+</span>
          </button>
          {open === p.id && (
            <div className="px-3 pb-3 border-t border-[rgba(13,148,136,0.1)] pt-2.5">
              <p className="text-[10px] text-[#C9A84C] mb-2">{p.journal}</p>
              <a href={p.href} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#14B8A6] hover:text-white transition-colors border border-[rgba(13,148,136,0.3)] hover:border-[#14B8A6] px-2.5 py-1 rounded">
                View Publication
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section className="py-12 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader sub="Knowledge Hub" title="Research & Projects" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Ongoing Projects */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-1.5 h-7 bg-gradient-to-b from-[#C9A84C] to-[#8B6914] rounded-full" />
              <div>
                <h3 className="font-display text-base font-semibold text-white">Ongoing Projects</h3>
                <p className="text-[10px] text-slate-500 font-mono-custom">{ongoingProjects.length} active research projects</p>
              </div>
            </div>
            <ProjectAccordion projects={ongoingProjects} />
          </div>

          {/* Latest Research */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-1.5 h-7 bg-gradient-to-b from-[#0D9488] to-[#065F46] rounded-full" />
              <div>
                <h3 className="font-display text-base font-semibold text-white">Latest Research</h3>
                <p className="text-[10px] text-slate-500 font-mono-custom">Recent peer-reviewed publications</p>
              </div>
            </div>
            <ResearchAccordion papers={latestResearch} />
            <div className="mt-3 text-right">
              <a href="#" className="text-[11px] text-[#C9A84C] hover:text-[#E8C97A] font-mono-custom tracking-wide underline underline-offset-4">
                View All Research Publications →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}