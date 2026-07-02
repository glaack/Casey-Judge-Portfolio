import { useParams, Link, Navigate } from "react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Check, Layers, Lock } from "lucide-react";
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
          {section.variant === "bullet" ? (
            <ul className="flex flex-col gap-2 pl-1">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[0.4rem] shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#5BBF45" }} />
                  <p className="text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#bbb" }}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
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
          )}
        </section>
      );

    case "image":
      const imageLayout = section.layout || "full";
      const imageWidth = imageLayout === "half" ? "md:w-1/2" : imageLayout === "third" ? "md:w-1/3" : "w-full";
      const fit = section.objectFit || "cover";
      const bg = section.imageBg || "#0e0e0e";
      return (
        <div className={`my-12 mx-auto ${imageWidth}`} key={index}>
          <div
            className="w-full overflow-hidden"
            style={{ backgroundColor: bg, border: "1px solid #333", padding: fit === "contain" ? "1.5rem" : 0 }}
          >
            <ImageWithFallback
              src={section.url}
              alt={section.caption || ""}
              className={`w-full h-auto ${fit === "contain" ? "object-contain max-h-40" : "object-cover"}`}
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
      if (section.layout === "device") {
        const [mobile, desktop] = section.images;
        return (
          <div className="my-12 flex flex-col sm:flex-row items-end gap-4" key={index}>
            {/* Mobile — narrower left panel */}
            <div className="flex flex-col sm:w-[30%]">
              <div className="overflow-hidden" style={{ border: "1px solid #333", backgroundColor: "#0e0e0e" }}>
                <ImageWithFallback
                  src={mobile.url}
                  alt={mobile.caption || ""}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
              {mobile.caption && (
                <p className="text-xs mt-3" style={{ fontFamily: "'Space Mono', monospace", color: "#777" }}>
                  {mobile.caption}
                </p>
              )}
            </div>
            {/* Desktop — wider right panel */}
            <div className="flex flex-col sm:w-[70%]">
              <div className="overflow-hidden w-full" style={{ border: "1px solid #333", backgroundColor: "#0e0e0e" }}>
                <ImageWithFallback
                  src={desktop.url}
                  alt={desktop.caption || ""}
                  className="w-full h-auto"
                />
              </div>
              {desktop.caption && (
                <p className="text-xs mt-3" style={{ fontFamily: "'Space Mono', monospace", color: "#777" }}>
                  {desktop.caption}
                </p>
              )}
            </div>
          </div>
        );
      }

      const colWidth = section.columns === 3 ? "md:w-1/3" : "md:w-1/2";
      return (
        <div className="my-12 flex flex-col md:flex-row items-end gap-6" key={index}>
          {section.images.map((img, i) => (
            <div key={i} className={`flex flex-col w-full ${colWidth}`}>
              <div
                className="w-full overflow-hidden"
                style={{ backgroundColor: "#0e0e0e", border: "1px solid #333", ...(section.imageHeight ? { height: section.imageHeight } : {}) }}
              >
                <ImageWithFallback
                  src={img.url}
                  alt={img.caption || ""}
                  className={`w-full ${section.imageHeight ? "h-full object-cover" : "h-auto"}`}
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
            className="text-base leading-relaxed"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#bbb",
            }}
          >
            {section.content.split(/\*\*(.+?)\*\*/).map((part, i) =>
              i % 2 === 1 ? <strong key={i} style={{ color: "#f5f5f5", fontWeight: 700 }}>{part}</strong> : part
            )}
          </p>
        </div>
      );

    case "placeholder": {
      const phCols = section.columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
      return (
        <div className={`my-12 grid grid-cols-1 ${section.labels.length > 1 ? phCols : ""}`} key={index} style={{ gap: "1px", backgroundColor: "#1e1e1e" }}>
          {section.labels.map((label, i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-2 py-14 px-6" style={{ backgroundColor: "#0a0a0a", border: "none" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", color: "#2a2a2a", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                Image Placeholder
              </div>
              <div style={{ fontFamily: "'Space Mono', monospace", color: "#444", fontSize: "0.7rem", textAlign: "center" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      );
    }

    case "quote":
      return null;

    case "external-link":
      return (
        <a
          key={index}
          href={section.url}
          target="_blank"
          rel="noopener noreferrer"
          className="my-8 flex items-center justify-between gap-4 px-5 py-4 group transition-colors duration-200"
          style={{ border: "1px solid #2a2a2a", backgroundColor: "#0c0c0c", display: "flex", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#444")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
        >
          <div>
            <div
              className="text-xs tracking-widest uppercase mb-1"
              style={{ fontFamily: "'Space Mono', monospace", color: "#777" }}
            >
              {section.description}
            </div>
            <div
              className="text-sm"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#ccc" }}
            >
              {section.label}
            </div>
          </div>
          <ArrowRight
            className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: "#5BBF45" }}
          />
        </a>
      );

    case "youtube":
      return (
        <div className="my-12" key={index}>
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingBottom: "56.25%", backgroundColor: "#0e0e0e", border: "1px solid #333" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${section.videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {section.caption && (
            <p className="text-xs mt-3" style={{ fontFamily: "'Space Mono', monospace", color: "#777" }}>
              {section.caption}
            </p>
          )}
        </div>
      );

    case "divider":
      return <div className="my-10" style={{ borderTop: "1px solid #333" }} key={index} />;

    default:
      return null;
  }
}

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find((s) => s.id === id);

  const sessionKey = `unlocked-${id}`;
  const [unlocked, setUnlocked] = useState(
    !study?.password || sessionStorage.getItem(sessionKey) === "true"
  );
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  if (!study) return <Navigate to="/work" replace />;

  if (!unlocked) {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (input === study.password) {
        sessionStorage.setItem(sessionKey, "true");
        setUnlocked(true);
        setError(false);
      } else {
        setError(true);
        setInput("");
      }
    };

    return (
      <main
        className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ backgroundColor: "#080808" }}
      >
        <div
          className="flex items-center justify-center w-12 h-12 mb-6 rounded-full"
          style={{ border: "1px solid #2a2a2a", backgroundColor: "#0e0e0e" }}
        >
          <Lock className="w-5 h-5" style={{ color: "#5BBF45" }} />
        </div>
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
          Protected Content
        </div>
        <h1
          className="uppercase mb-3"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#f5f5f5",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {study.title}
        </h1>
        <p
          className="text-sm leading-relaxed mb-8 max-w-sm"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#777" }}
        >
          This case study is password protected. Enter the password to view.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 w-full max-w-xs">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Enter password"
            autoFocus
            className="w-full px-4 py-3 text-sm outline-none"
            style={{
              fontFamily: "'Space Mono', monospace",
              backgroundColor: "#0e0e0e",
              border: error ? "1px solid #c0392b" : "1px solid #2a2a2a",
              color: "#f5f5f5",
            }}
          />
          {error && (
            <p className="text-xs" style={{ fontFamily: "'Space Mono', monospace", color: "#c0392b" }}>
              Incorrect password. Try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 text-sm tracking-widest uppercase"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: "linear-gradient(135deg, #4AA83C, #6FD159)",
              color: "#080808",
            }}
          >
            Unlock
          </button>
        </form>
        <Link
          to="/work"
          className="mt-8 text-xs tracking-widest uppercase"
          style={{ fontFamily: "'Space Mono', monospace", color: "#555" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#999")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
        >
          ← Back to Work
        </Link>
      </main>
    );
  }

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
              {study.tags[0]}
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
              className="text-sm leading-relaxed max-w-xl mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#999" }}
            >
              {study.subtitle}
            </p>
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs tracking-wider"
                  style={{ fontFamily: "'Space Mono', monospace", color: "#bbb", border: "1px solid #555", backgroundColor: "rgba(0,0,0,0.45)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
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
      <div className="max-w-7xl mx-auto mb-16" style={{ borderTop: "1px solid #333", borderBottom: "1px solid #333" }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ backgroundColor: "#222", gap: "1px" }}>
          {[
            { icon: <User className="w-3.5 h-3.5" />, label: "Role", value: study.role },
            { icon: <Calendar className="w-3.5 h-3.5" />, label: "Year", value: study.year },
            { icon: <Clock className="w-3.5 h-3.5" />, label: "Duration", value: study.duration },
            { icon: <Layers className="w-3.5 h-3.5" />, label: "Medium", value: study.medium },
          ].map((item) => (
            <div key={item.label} className="px-6 md:px-8 py-5" style={{ backgroundColor: "#080808" }}>
              <div
                className="flex items-center gap-1.5 text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: "'Space Mono', monospace", color: "#555" }}
              >
                {item.icon}
                {item.label}
              </div>
              <div
                className="text-sm leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#ccc" }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <article className="pb-20">

        {/* Methodology block */}
        <div className="max-w-3xl mx-auto px-6 md:px-10 mb-12">
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
            Methods
          </div>
          <div className="flex flex-wrap gap-2">
            {study.methods.map((method) => (
              <span
                key={method}
                className="px-3 py-1.5 text-xs tracking-wide"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#bbb",
                  border: "1px solid rgba(91,191,69,0.25)",
                  backgroundColor: "rgba(91,191,69,0.04)",
                }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Render custom sections — images break out wider than text */}
        {study.sections.map((section, index) => {
          const isWide = section.type === "image" || section.type === "image-grid" || section.type === "placeholder";
          return (
            <div key={index} className={`${isWide ? "max-w-5xl" : "max-w-3xl"} mx-auto px-6 md:px-10`}>
              <SectionRenderer section={section} index={index} />
            </div>
          );
        })}
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
