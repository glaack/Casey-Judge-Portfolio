import { Mail, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import portraitImage from "../../imports/FA04DA7C-1279-483B-8C0B-3B0A944F32F2_1_201_a.jpeg?url";

export function Contact() {
  return (
    <main style={{ backgroundColor: "#080808", minHeight: "100vh" }}>
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Left - Contact Info */}
            <div>
              <div
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: "'Space Mono', monospace", background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                Get in Touch
              </div>
              <h1
                className="uppercase mb-6 md:mb-10"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#f5f5f5",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 0.95,
                }}
              >
                Let's
                <span style={{ background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> Talk</span>
              </h1>

              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#bbb" }}
              >
                If you're looking for a research partner, a collaborator, or just want to talk shop, I'd love to hear from you.
              </p>

              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#bbb" }}
              >
                I'm particularly interested in projects where research can make a real strategic impact. I work best with teams that value curiosity, flexibility, and collaboration.
              </p>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#bbb" }}
              >
              If you're building something meaningful and want a research partner who can shed light on the complexities of the problem space, let's connect.
            </p>
              <a
                href="mailto:chicory-samba-0x@icloud.com"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm tracking-widest uppercase transition-all duration-200 hover:gap-3"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  background: "linear-gradient(135deg, #4AA83C, #6FD159)",
                  color: "#080808",
                }}
              >
                Shoot Me an Email
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right - Film Strip Portrait */}
            <div>
              <div
                className="relative overflow-hidden mb-6 hidden lg:block"
                style={{ border: "1px solid #333" }}
              >
                {/* Film perforations top */}
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
                {/* Film perforations bottom */}
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

              {/* Info */}
              <div className="flex flex-col gap-2">
                {[
                  {
                    label: "Email",
                    value: "chicory-samba-0x@icloud.com",
                  },
                  {
                    label: "LinkedIn",
                    value: "linkedin.com/in/acacia-judge",
                  },
                  {
                    label: "IMDB",
                    value: "imdb.com/name/nm6516608/",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 py-3 ${i === 0 ? 'border-t lg:border-t-0' : ''}`}
                    style={{
                      borderBottom: "1px solid #444",
                      ...(i === 0 && { borderTopColor: "#444" })
                    }}
                  >
                    <span
                      className="text-xs tracking-widest uppercase w-24 md:w-36 shrink-0"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        color: "#777",
                      }}
                    >
                      {item.label}
                    </span>
                    {item.label === "LinkedIn" || item.label === "IMDB" ? (
                      <a
                        href={`https://${item.value}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          color: "#bbb",
                          textDecoration: "underline",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#5BBF45")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#bbb")}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        className="text-sm"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          color: "#bbb",
                        }}
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
    </main>
  );
}
