import { Link, useLocation } from "react-router";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import portraitImage from "../../imports/Me1.jpeg";

export function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#toolkit") {
      // First jump to top immediately
      window.scrollTo(0, 0);
      // Then scroll to the section with offset
      setTimeout(() => {
        const element = document.getElementById("toolkit");
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [location]);

  const skills = [
    {
      category: "Qualitative Methods",
      items: [
        "Diary Studies",
        "Contextual Inquiry",
        "Ethnographic Research",
        "Usability Testing",
        "Expert Interviews",
      ],
    },
    {
      category: "Quantitative Methods",
      items: [
        "Survey Research",
        "A/B Test Analysis",
        "Card Sorting",
        "Statistical Analysis",
      ],
    },
    {
      category: "Analysis & Strategy",
      items: [
        "Affinity Mapping",
        "Task Analysis",
        "Mental Model Mapping",
        "Journey Mapping",
      ],
    },
    {
      category: "Tools",
      items: [
        "UserTesting",
        "Miro",
        "Figma",
        "Survey Platforms",
        "Pen and Paper",
      ],
    },
  ];

  const experience = [
    {
      year: "2023–Present",
      company: "Wētā FX",
      role: "Senior UX Researcher",
      desc: [
        "Lead discovery research to analyze complex VFX production pipelines, surfacing insights that drive strategic UX improvements and increase workflow eﬃciency for artists",
        "Architect a Qt-based UI framework used across 150+ internal tools, ensuring a consistent and user-friendly experience",
        "Implement strategies across the company to increase human-centered design maturity amongst development teams",
        "Mentor junior researchers and designers through structured onboarding, feedback cycles, and collaborative projects",
      ],
    },
    {
      year: "2021–present",
      company: "NYU Tandon School of Engineering",
      role: "Adjunct Professor",
      desc: [
        "Craft engaging, practical, and theory-driven courses that help students hone their design thinking skills",
        "Help students to develop their personal creative processes through ideation, prototyping, and iteration",
        "Empower students to apply qualitative and quantitative research methods to solve real-world problems"
      ],
    },
    {
      year: "2022–2023",
      company: "Unity Technologies",
      role: "Senior UX Researcher",
      desc: [
        "Collaborated with client Wētā FX to conduct in-depth analysis of VFX pipeline systems to pinpoint areas to enhance the overall artist experience",
        "Led a cross-functional initiative with the Unity Wētā Tools team to bring industry standard VFX software to market",
        "Developed a robust design system that conveyed Wētā FX branding and unified the user experience across products"
      ],
    },
    {
      year: "2021–2022",
      company: "Community.Co",
      role: "UX Researcher",
      desc: [
        "Collected and synthesized quantitative user data to surface usability trends and guide product strategy",
        "Conducted usability testing and heuristic evaluations to inform redesigns and improve feature adoption",
        "Encouraged data-driven decision making amongst senior leadership which ultimately influenced the trajectory of the platform’s main features"
      ],
    },
    {
      year: "2020–2021",
      company: "Emeritus",
      role: "Subject Matter Expert, XR Development",
      desc: [
        "Applied extensive knowledge of design and development for augmented and virtual reality to develop two NYU Tandon Online courses that introduced software developers to XR development techniques",
        "Created interactive learning modules and hands-on exercises to bridge theory and practical XR implementation"
      ],
    },
    {
      year: "2018–2021",
      company: "Unseen Media",
      role: "Product Designer",
      desc: [
        "Researched, designed, and prototyped next-generation augmented reality (AR) game concepts",
        "Informed game design through iterative prototyping and behavior-driven user analysis",
        "Applied lean startup methodology to test product-market fit with 100+ customer discovery interviews"
      ],
    },
  ];

  return (
    <main
      style={{ backgroundColor: "#080808", minHeight: "100vh" }}
    >
      {/* Header */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <div
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{
                fontFamily: "'Space Mono', monospace",
                background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}
            >
              About
            </div>
            <h1
              className="uppercase mb-6 md:mb-8"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#f5f5f5",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
              }}
            >
              Casey
              <span style={{ background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> Judge</span>
            </h1>
            <div
              className="text-sm tracking-widest uppercase mb-8"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "#999",
              }}
            >Senior Design Researcher · Brooklyn, NY</div>

            <div className="flex flex-col gap-4 mb-10">
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#bbb",
                  fontSize: "0.95rem",
                }}
              >I'm a design researcher at <a href="https://www.wetafx.co.nz/" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "underline", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#5BBF45")} onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}>Wētā FX</a>, and an adjunct professor in the <a href="https://engineering.nyu.edu/academics/programs/integrated-design-media-ms" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "underline", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#5BBF45")} onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}>Integrated Design and Media</a> and <a href="https://engineering.nyu.edu" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "underline", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#5BBF45")} onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}>General Engineering</a> departments at New York University.</p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#bbb",
                  fontSize: "0.95rem",
                }}
              >I'm curious about how people perceive the world around them, and I leverage that curiosity to build better user experiences.</p>
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#bbb",
                  fontSize: "0.95rem",
                }}
              >I can't talk too much about what I do <a href="https://www.imdb.com/name/nm6516608/" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "underline", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#5BBF45")} onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}>behind the scenes</a>, but you can reach out to me via <a href="mailto:chicory-samba-0x@icloud.com" style={{ color: "#999", textDecoration: "underline", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#5BBF45")} onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}>email</a> or connect with me on <a href="https://linkedin.com/in/acacia-judge" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "underline", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#5BBF45")} onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}>LinkedIn</a> if you want to chat.</p>
            </div>

            <a
              href="mailto:chicory-samba-0x@icloud.com"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm tracking-widest uppercase transition-all duration-200 hover:gap-3"
              style={{
                fontFamily: "'Space Mono', monospace",
                background: "linear-gradient(135deg, #4AA83C, #6FD159)",
                color: "#080808",
              }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right side — image placeholder + credentials */}
          <div>
            <div
              className="relative overflow-hidden mb-6"
              style={{ border: "1px solid #333" }}
            >
              {/* Film perfs */}
              <div
                className="flex items-center justify-center gap-2 overflow-hidden py-3"
                style={{
                  backgroundColor: "#0d0d0d",
                  borderBottom: "1px solid #333",
                }}
              >
                {Array.from({ length: 17 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-4 rounded-[2px]"
                    style={{
                      backgroundColor: "#080808",
                      border: "1px solid #333",
                    }}
                  />
                ))}
              </div>
              {/* Portrait */}
              <ImageWithFallback
                src={portraitImage}
                alt="Casey Judge portrait"
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                className="flex items-center justify-center gap-2 overflow-hidden py-3"
                style={{
                  backgroundColor: "#0d0d0d",
                  borderTop: "1px solid #333",
                }}
              >
                {Array.from({ length: 17 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-4 rounded-[2px]"
                    style={{
                      backgroundColor: "#080808",
                      border: "1px solid #333",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="flex flex-col gap-2">
              {[
                { label: "Education", value: "B.S. & M.S. in Integrated Design & Media, NYU", href: undefined },
                { label: "Based In", value: "Brooklyn, NY", href: undefined },
                { label: "Email", value: "chicory-samba-0x@icloud.com", href: "mailto:chicory-samba-0x@icloud.com" },
                { label: "LinkedIn", value: "linkedin.com/in/acacia-judge", href: "https://linkedin.com/in/acacia-judge" },
                { label: "IMDB", value: "imdb.com/name/nm6516608/", href: "https://imdb.com/name/nm6516608/" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 py-3"
                  style={{ borderBottom: "1px solid #444" }}
                >
                  <span
                    className="text-xs tracking-widest uppercase w-36 shrink-0"
                    style={{ fontFamily: "'Space Mono', monospace", color: "#777" }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-sm"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#bbb", textDecoration: "underline", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#5BBF45")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#bbb")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className="text-sm"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#bbb" }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #2a2a2a" }} />

      {/* Skills */}
      <section id="toolkit" className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20" style={{ scrollMarginTop: "80px" }}>
        <div
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{
            fontFamily: "'Space Mono', monospace",
            background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}
        >
          Research Toolkit
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6"
              style={{
                backgroundColor: "#0e0e0e",
                border: "1px solid #333",
              }}
            >
              <div
                className="text-xs tracking-widest uppercase mb-5"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#999",
                }}
              >
                {group.category}
              </div>
              <div className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#777",
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "linear-gradient(135deg, #4AA83C, #6FD159)" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #2a2a2a" }} />

      {/* Experience */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{
            fontFamily: "'Space Mono', monospace",
            background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}
        >
          Experience
        </div>
        <div className="flex flex-col">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-8"
              style={{ borderBottom: "1px solid #444" }}
            >
              <div
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#777",
                }}
              >
                {exp.year}
              </div>
              <div className="md:col-span-3">
                <div
                  className="mb-1"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#e0e0e0",
                    fontWeight: 600,
                  }}
                >
                  {exp.role}
                </div>
                <div
                  className="text-sm mb-3"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}
                >
                  {exp.company}
                </div>
                <ul className="flex flex-col gap-2">
                  {exp.desc.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-sm leading-relaxed flex gap-2"
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        color: "#aaa",
                      }}
                    >
                      <span style={{ color: "#5BBF45" }}>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}