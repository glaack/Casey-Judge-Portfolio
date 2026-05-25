import { useNavigate } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "../data/caseStudies";
import { useState, useEffect } from "react";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export function CaseStudyCard({
  study,
  index,
}: CaseStudyCardProps) {
  const navigate = useNavigate();
  const [perfCount, setPerfCount] = useState(30);

  useEffect(() => {
    const updatePerfCount = () => {
      setPerfCount(window.innerWidth >= 768 ? 15 : 30);
    };
    updatePerfCount();
    window.addEventListener('resize', updatePerfCount);
    return () => window.removeEventListener('resize', updatePerfCount);
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/work/${study.id}`);
  };

  return (
    <button
      type="button"
      className="group flex flex-col relative overflow-hidden w-full text-left"
      style={{
        backgroundColor: "#0e0e0e",
        border: "1px solid #333",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent",
        padding: 0,
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#5BBF45";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#333";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Film perforations - top */}
      <div
        className="flex items-center justify-center gap-2 overflow-hidden px-8 py-3"
        style={{
          backgroundColor: "#0d0d0d",
          borderBottom: "1px solid #333",
        }}
      >
        {Array.from({ length: perfCount }).map((_, i) => (
          <div
            key={i}
            className="w-6 h-4 rounded-[2px] shrink-0"
            style={{
              backgroundColor: "#080808",
              border: "1px solid #333",
            }}
          />
        ))}
      </div>

      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ height: "220px" }}
      >
        <img
          src={study.imageUrl}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: "grayscale(60%) brightness(0.7)" }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, #0e0e0e 100%)",
          }}
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2 py-1 text-xs tracking-widest uppercase"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: "linear-gradient(135deg, #4AA83C, #6FD159)",
              color: "#080808",
            }}
          >
            {study.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
          <div
            className="flex items-center gap-3 mb-3"
            style={{ color: "#999" }}
          >
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {study.year}
            </span>
          </div>

          <h3
            className="mb-2 transition-colors duration-200 group-hover:text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#e0e0e0",
              fontSize: "1.05rem",
              lineHeight: "1.4",
            }}
          >
            {study.title}
          </h3>

          <p
            className="text-sm mb-4 line-clamp-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#aaa",
              lineHeight: "1.6",
            }}
          >
            {study.subtitle}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {study.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs tracking-wider"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#999",
                  border: "1px solid #444",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-sm transition-all duration-200"
          style={{
            fontFamily: "'Space Mono', monospace",
            background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}
        >
          <span className="tracking-widest text-xs uppercase">
            View Case Study
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "#5BBF45" }} />
        </div>
      </div>

      {/* Film perforations - bottom */}
      <div
        className="flex items-center justify-center gap-2 overflow-hidden px-8 py-3"
        style={{
          backgroundColor: "#0d0d0d",
          borderTop: "1px solid #333",
        }}
      >
        {Array.from({ length: perfCount }).map((_, i) => (
          <div
            key={i}
            className="w-6 h-4 rounded-[2px] shrink-0"
            style={{
              backgroundColor: "#080808",
              border: "1px solid #333",
            }}
          />
        ))}
      </div>
    </button>
  );
}