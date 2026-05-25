import { Link } from "react-router";

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#080808", borderTop: "1px solid #333" }}
    >
      {/* Divider */}
      <div style={{ borderTop: "1px solid #2a2a2a" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#666" }}
          >
            © 2026 Casey Judge — All rights reserved
          </span>
          <div className="flex items-center gap-4 text-xs" style={{ fontFamily: "'Space Mono', monospace" }}>
            <a
              href="mailto:placeholder@framework.co"
              className="transition-colors duration-200"
              style={{ color: "#666" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#5BBF45")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#666")}
            >
              EMAIL
            </a>
            <span style={{ color: "#666" }}>•</span>
            <a
              href="#"
              className="transition-colors duration-200"
              style={{ color: "#666" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#5BBF45")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#666")}
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}