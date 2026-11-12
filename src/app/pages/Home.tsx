import { Link } from "react-router";
import { ArrowDown, ArrowRight, Play } from "lucide-react";
import { caseStudies } from "../data/caseStudies";
import { CaseStudyCard } from "../components/CaseStudyCard";

export function Home() {
  const featured = caseStudies.filter((s) => s.featured);

  return (
    <main
      style={{ backgroundColor: "#080808", minHeight: "100vh" }}
    >
      {/* ── HERO ── */}
      <section
        className="relative flex flex-col justify-center overflow-hidden py-24 md:py-28"
        style={{ minHeight: "100svh" }}
      >
        {/* Background texture grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top film strip */}
        <div
          className="absolute top-0 left-0 right-0 flex items-center px-4 py-2 gap-2 overflow-hidden pt-20"
          style={{ backgroundColor: "transparent" }}
        ></div>

        {/* Projector light: spills in from off-screen top right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              // lime core
              "radial-gradient(ellipse 70% 90% at 92% 8%, rgba(111,209,89,0.26) 0%, rgba(91,191,69,0.17) 20%, rgba(74,168,60,0.09) 40%, rgba(74,168,60,0.03) 60%, transparent 80%)",
              // deeper green-teal underlayer for depth
              "radial-gradient(ellipse 100% 120% at 90% 10%, rgba(28,92,72,0.28) 0%, rgba(20,70,55,0.10) 45%, transparent 75%)",
            ].join(", "),
          }}
        />

        {/* Grid lines catch the light */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(140,230,120,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(140,230,120,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 70% 90% at 92% 8%, black 0%, rgba(0,0,0,0.4) 40%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 90% at 92% 8%, black 0%, rgba(0,0,0,0.4) 40%, transparent 78%)",
          }}
        />

        {/* Film grain: breaks up gradient banding */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            opacity: 0.06,
            mixBlendMode: "overlay",
          }}
        />

        {/* Top scrim: keeps the nav legible over the light */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "160px",
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.7) 0%, rgba(8,8,8,0.45) 45%, transparent 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          {/* Main headline
              Phone:   RESEARCHING / THE HUMAN / EXPERIENCE
              sm and up: RESEARCHING THE / HUMAN EXPERIENCE */}
          <div className="mb-6 md:mb-8 overflow-hidden">
            <h1
              className="uppercase leading-[0.9]"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#f5f5f5",
                fontSize: "clamp(2.25rem, 6.5vw, 5.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Researching <br className="sm:hidden" />
              the <br className="hidden sm:inline" />
              <span
                style={{
                  background: "linear-gradient(135deg, #4AA83C, #6FD159)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  WebkitBoxDecorationBreak: "clone",
                  boxDecorationBreak: "clone",
                }}
              >
                Human <br className="sm:hidden" />
                Experience
              </span>
            </h1>
          </div>

          {/* Sub-info row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p
                className="text-base leading-relaxed mb-16"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#bbb",
                }}
              >
                Hi, I'm Casey Judge! I'm a Senior UX Researcher with over 8
                years of experience working in film and immersive
                entertainment. I build innovative tools that support human creativity.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  to="/work"
                  className="flex items-center justify-center gap-2 px-5 py-3 text-sm tracking-widest uppercase transition-all duration-200 hover:gap-3"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    background:
                      "linear-gradient(135deg, #4AA83C, #6FD159)",
                    color: "#080808",
                  }}
                >
                  View Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="flex items-center justify-center gap-2 px-5 py-3 text-sm tracking-widest uppercase transition-all duration-200"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: "#bbb",
                    border: "1px solid #444",
                  }}
                  onClick={() => window.scrollTo(0, 0)}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget as HTMLElement
                    ).style.color = "#f5f5f5";
                    (
                      e.currentTarget as HTMLElement
                    ).style.borderColor = "#999";
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget as HTMLElement
                    ).style.color = "#bbb";
                    (
                      e.currentTarget as HTMLElement
                    ).style.borderColor = "#444";
                  }}
                >
                  About Me
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-0 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pb-4 md:pb-0">
          <ArrowDown
            className="w-4 h-4 animate-bounce"
            style={{ color: "#666" }}
          />
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "#666",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #2a2a2a" }} />

      {/* ── FEATURED WORK ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-28">
        <div className="flex items-end justify-between mb-14 gap-4 flex-wrap">
          <div>
            <div
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{
                fontFamily: "'Space Mono', monospace",
                background:
                  "linear-gradient(135deg, #4AA83C, #6FD159)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Selected Work
            </div>
            <h2
              className="uppercase"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#f5f5f5",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              Case Studies
            </h2>
          </div>
          <Link
            to="/work"
            className="flex items-center gap-2 text-sm tracking-widest uppercase w-fit group"
            style={{
              fontFamily: "'Space Mono', monospace",
              background:
                "linear-gradient(135deg, #4AA83C, #6FD159)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            onClick={() => window.scrollTo(0, 0)}
          >
            View All
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
              style={{ color: "#5BBF45" }}
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.slice(0, 3).map((study, i) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* ── METHODS / PROCESS SECTION ── */}
      <section
        className="py-16 md:py-28"
        style={{
          borderTop: "1px solid #2a2a2a",
          borderBottom: "1px solid #2a2a2a",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-3"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  background:
                    "linear-gradient(135deg, #4AA83C, #6FD159)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                My Process
              </div>
              <h2
                className="uppercase mb-6"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#f5f5f5",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                From Observation
                <br />
                to Direction
              </h2>
              <p
                className="leading-relaxed mb-8"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#aaa",
                  fontSize: "0.95rem",
                }}
              >
                I watch how people work, ask the right questions, and
                measure what matters. Then I distill it into a clear point
                of view that helps teams build better tools.
              </p>
              <Link
                to="/about#toolkit"
                className="flex items-center gap-2 text-sm tracking-widest uppercase w-fit"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  background:
                    "linear-gradient(135deg, #4AA83C, #6FD159)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.gap =
                    "12px";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.gap =
                    "8px";
                }}
              >
                See My Toolkit
                <ArrowRight
                  className="w-3.5 h-3.5"
                  style={{ color: "#5BBF45" }}
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  desc: "Scoping research questions and stakeholder alignment before any study begins.",
                },
                {
                  num: "02",
                  title: "Definition",
                  desc: "Qualitative and quantitative methods chosen to thoroughly explore the problem space.",
                },
                {
                  num: "03",
                  title: "Development",
                  desc: "Refining ideas through iterative prototyping and rigorous testing with real users.",
                },
                {
                  num: "04",
                  title: "Delivery",
                  desc: "Translating insights into actionable design recommendations.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="p-5"
                  style={{
                    backgroundColor: "#0e0e0e",
                    border: "1px solid #333",
                  }}
                >
                  <div
                    className="text-xs tracking-widest mb-3"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      background:
                        "linear-gradient(135deg, #4AA83C, #6FD159)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    className="mb-2 uppercase tracking-wide"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#e0e0e0",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                    }}
                  >
                    {step.title}
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#999",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-28 text-center">
        <div
          className="text-xs tracking-[0.3em] uppercase mb-4"
          style={{
            fontFamily: "'Space Mono', monospace",
            background:
              "linear-gradient(135deg, #4AA83C, #6FD159)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Available for Collaboration
        </div>
        <h2
          className="uppercase mb-8"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#f5f5f5",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Let's Make Something
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #4AA83C, #6FD159)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Worth Experiencing
          </span>.
        </h2>
        <Link
          to="/about"
          className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 hover:gap-4"
          style={{
            fontFamily: "'Space Mono', monospace",
            background:
              "linear-gradient(135deg, #4AA83C, #6FD159)",
            color: "#080808",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          Start a Conversation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}