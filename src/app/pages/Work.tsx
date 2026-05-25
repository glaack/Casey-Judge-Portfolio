import { useState } from "react";
import { caseStudies } from "../data/caseStudies";
import { CaseStudyCard } from "../components/CaseStudyCard";

const ALL_TAGS = ["All", "Research", "VFX Software", "Immersive Technology", "E-Commerce"];

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter(
          (s) =>
            s.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
            s.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
        );

  return (
    <main style={{ backgroundColor: "#080808", minHeight: "100vh" }}>
      {/* Header */}
      <section
        className="max-w-7xl mx-auto px-[40px] pt-[128px] pb-[20px]"
      >
        {/* Eyebrow */}
        <div
          className="text-xs tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: "'Space Mono', monospace", background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
        >
          Project Archive
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <h1
            className="uppercase"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#f5f5f5",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
            }}
          >
            Previous <span style={{ background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Work</span>
          </h1>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => {
            const isActive = activeFilter === tag;
            return (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className="px-4 py-2 text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  background: isActive ? "linear-gradient(135deg, #4AA83C, #6FD159)" : "transparent",
                  color: isActive ? "#080808" : "#999",
                  border: isActive ? "1px solid #5BBF45" : "1px solid #444",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section>

      {/* Case studies grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        {filtered.length === 0 ? (
          <div
            className="text-center py-24"
            style={{ fontFamily: "'Space Mono', monospace", color: "#777" }}
          >
            No studies match this filter.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ isolation: "isolate" }}>
            {filtered.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
            ))}
          </div>
        )}

        {/* Count */}
        <div
          className="mt-10 text-xs tracking-widest text-center"
          style={{ fontFamily: "'Space Mono', monospace", color: "#666" }}
        >
          SHOWING {filtered.length} / {caseStudies.length} STUDIES
        </div>
      </section>
    </main>
  );
}