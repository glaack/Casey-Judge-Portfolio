import { useParams, Link, Navigate } from "react-router";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Check } from "lucide-react";
import { caseStudies, SectionType } from "../data/caseStudies";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// Component to render different section types
function SectionRenderer({ section, index }: { section: SectionType; index: number }) {
  switch (section.type) {
    case "text":
      const paragraphs = Array.isArray(section.content) ? section.content : [section.content];
      return (
        <section className="mb-12" key={index}>
          <div
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: "linear-gradient(135deg, #4AA83C, #6FD159)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {section.heading}
          </div>
          <div className="space-y-4">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="leading-relaxed"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#bbb",
                  fontSize: "1.05rem",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      );

    case "list":
      return (
        <section className="mb-12" key={index}>
          <div
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: "linear-gradient(135deg, #4AA83C, #6FD159)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {section.heading}
          </div>
          <div className="flex flex-col gap-4">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4"
                style={{ backgroundColor: "#0e0e0e", border: "1px solid #333" }}
              >
                <div
                  className="text-xs tracking-widest mt-0.5 shrink-0"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    background: "linear-gradient(135deg, #4AA83C, #6FD159)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#bbb" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      );

    case "image":
      const imageLayout = section.layout || "full";
      const imageWidth = imageLayout === "half" ? "md:w-1/2" : imageLayout === "third" ? "md:w-1/3" : "w-full";
      return (
        <div className={`my-12 ${imageWidth}`} key={index}>
          <div
            className="w-full overflow-hidden"
            style={{ backgroundColor: "#0e0e0e", border: "1px solid #333" }}
          >
            <ImageWithFallback
              src={section.url}
              alt={section.caption || ""}
              className="w-full h-auto object-cover"
            />
          </div>
          {section.caption && (
            <p
              className="text-xs mt-3"
              style={{ fontFamily: "'Space Mono', monospace", color: "#777" }}
            >
              {section.caption}
            </p>
          )}
        </div>
      );

    case "image-grid":
      const gridCols = section.columns === 3 ? "grid-cols-3" : "grid-cols-2";
      return (
        <div className={`my-12 grid grid-cols-1 md:${gridCols} gap-6`} key={index}>
          {section.images.map((img, i) => (
            <div key={i}>
              <div
                className="w-full overflow-hidden"
                style={{ backgroundColor: "#0e0e0e", border: "1px solid #333", aspectRatio: "4/3" }}
              >
                <ImageWithFallback
                  src={img.url}
                  alt={img.caption || ""}
                  className="w-full h-full object-cover"
                />
              </div>
              {img.caption && (
                <p
                  className="text-xs mt-3"
                  style={{ fontFamily: "'Space Mono', monospace", color: "#777" }}
                >
                  {img.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      );

    case "callout":
      const variant = section.variant || "default";
      const borderColor = variant === "success" ? "#4AA83C" : variant === "warning" ? "#FFA500" : "#333";
      return (
        <div className="my-12" key={index}>
          <div
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: "linear-gradient(135deg, #4AA83C, #6FD159)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {section.heading}
          </div>
          <p
            className="text-xl md:text-2xl"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#bbb",
              fontWeight: 600,
            }}
          >
            {section.content}
          </p>
        </div>
      );

    case "quote":
      return null;

    case "divider":
      return <div className="my-10" style={{ borderTop: "1px solid #333" }} key={index} />;

    default:
      return null;
  }
}

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) return <Navigate to="/work" replace />;

  const currentIndex = caseStudies.findIndex((s) => s.id === id);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
  const prevStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

  return (
    <main style={{ backgroundColor: "#080808", minHeight: "100vh" }}>
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200"
          style={{ fontFamily: "'Space Mono', monospace", color: "#999" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#5BBF45")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#999")}
        >
          <ArrowLeft className="w-3.5 h-3.5" style={{ color: "#5BBF45" }} />
          Back to Work
        </Link>
      </div>

      {/* Hero image with film frame */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        {/* Film perforations top */}
        <div
          className="flex items-center justify-center gap-2 px-8 py-3 overflow-hidden"
          style={{ backgroundColor: "#0d0d0d", border: "1px solid #333", borderBottom: "none" }}
        >
          {Array.from({ length: 37 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 w-6 h-4 rounded-[2px]"
              style={{ backgroundColor: "#080808", border: "1px solid #333" }}
            />
          ))}
        </div>

        <div className="relative overflow-hidden" style={{ height: "clamp(300px, 50vw, 520px)", border: "1px solid #333", borderTop: "none", borderBottom: "none" }}>
          <img
            src={study.imageUrl}
            alt={study.title}
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(40%) brightness(0.55)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(8,8,8,0.8) 0%, transparent 50%, rgba(8,8,8,0.3) 100%)",
            }}
          />

          {/* Category badge */}
          <div className="absolute top-6 left-6">
            <span
              className="px-3 py-1.5 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Space Mono', monospace", background: "linear-gradient(135deg, #4AA83C, #6FD159)", color: "#080808" }}
            >
              {study.category}
            </span>
          </div>

          {/* Meta info over image */}
          <div className="absolute bottom-8 left-8 right-8">
            <h1
              className="uppercase mb-2"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#f5f5f5",
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                maxWidth: "700px",
              }}
            >
              {study.title}
            </h1>
            <p
              className="text-sm leading-relaxed max-w-xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#999" }}
            >
              {study.subtitle}
            </p>
          </div>
        </div>

        {/* Film perforations bottom */}
        <div
          className="flex items-center justify-center gap-2 px-8 py-3 overflow-hidden"
          style={{ backgroundColor: "#0d0d0d", border: "1px solid #333", borderTop: "none" }}
        >
          {Array.from({ length: 37 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 w-6 h-4 rounded-[2px]"
              style={{ backgroundColor: "#080808", border: "1px solid #333" }}
            />
          ))}
        </div>
      </div>

      {/* Meta row */}
      <div
        className="max-w-7xl mx-auto px-6 md:px-10 mb-16"
        style={{ borderTop: "1px solid #444", borderBottom: "1px solid #444" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 gap-x-0 divide-x divide-[#2a2a2a] py-6">
          {[
            { icon: <User className="w-4 h-4" />, label: "Role", value: study.role },
            { icon: <Calendar className="w-4 h-4" />, label: "Year", value: study.year },
            { icon: <Clock className="w-4 h-4" />, label: "Duration", value: study.duration },
            { icon: null, label: "Methods", value: study.methods.slice(0, 2).join(", ") + (study.methods.length > 2 ? ` +${study.methods.length - 2}` : "") },
          ].map((item, idx) => (
            <div key={item.label} className={`${idx % 2 === 0 ? 'pl-0 pr-3' : 'pl-3 pr-0'} md:px-6 md:first:pl-0 md:last:pr-0`}>
              <div
                className="flex items-center gap-1.5 text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: "'Space Mono', monospace", color: "#777" }}
              >
                {item.icon}
                {item.label}
              </div>
              <div
                className="text-sm"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#ccc" }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 md:px-10 pb-20">
        {/* Methods tags */}
        <div className="flex flex-wrap gap-2 mb-14">
          {study.methods.map((m) => (
            <span
              key={m}
              className="px-3 py-1 text-xs tracking-wider"
              style={{
                fontFamily: "'Space Mono', monospace",
                background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                border: "1px solid rgba(91,191,69,0.3)",
                backgroundColor: "rgba(91,191,69,0.04)",
              }}
            >
              {m}
            </span>
          ))}
        </div>

        {/* Render custom sections */}
        {study.sections.map((section, index) => (
          <SectionRenderer key={index} section={section} index={index} />
        ))}
      </article>

      {/* Next / Prev navigation */}
      <div
        className="border-t"
        style={{ borderColor: "#2a2a2a" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#2a2a2a]">
          <Link
            to={`/work/${prevStudy.id}`}
            className="group flex flex-col gap-2 p-8 md:p-10 transition-colors duration-200 hover:bg-[#0d0d0d]"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className="flex items-center gap-2 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Space Mono', monospace", color: "#777" }}
            >
              <ArrowLeft className="w-3.5 h-3.5" style={{ color: "#5BBF45" }} />
              Previous
            </div>
            <div
              className="text-sm transition-colors duration-200 group-hover:text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#aaa" }}
            >
              {prevStudy.title}
            </div>
          </Link>
          <Link
            to={`/work/${nextStudy.id}`}
            className="group flex flex-col gap-2 p-8 md:p-10 md:items-end transition-colors duration-200 hover:bg-[#0d0d0d]"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className="flex items-center gap-2 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'Space Mono', monospace", color: "#777" }}
            >
              Next
              <ArrowRight className="w-3.5 h-3.5" style={{ color: "#5BBF45" }} />
            </div>
            <div
              className="text-sm transition-colors duration-200 group-hover:text-white md:text-right"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#aaa" }}
            >
              {nextStudy.title}
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
