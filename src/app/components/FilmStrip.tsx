interface FilmStripProps {
  className?: string;
  holeCount?: number;
}

export function FilmStripHorizontal({ className = "", holeCount = 16 }: FilmStripProps) {
  return (
    <div
      className={`w-full flex flex-col ${className}`}
      style={{ backgroundColor: "#111" }}
    >
      {/* Top perforations */}
      <div className="flex items-center justify-center px-4 py-3 gap-2 overflow-hidden">
        {Array.from({ length: holeCount }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 w-6 h-4 rounded-[2px]"
            style={{ backgroundColor: "#080808", border: "1px solid #333" }}
          />
        ))}
      </div>
      {/* Middle strip */}
      <div
        className="h-8 w-full"
        style={{ backgroundColor: "#111" }}
      />
      {/* Bottom perforations */}
      <div className="flex items-center justify-center px-4 py-3 gap-2 overflow-hidden">
        {Array.from({ length: holeCount }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 w-6 h-4 rounded-[2px]"
            style={{ backgroundColor: "#080808", border: "1px solid #333" }}
          />
        ))}
      </div>
    </div>
  );
}

interface FilmFrameProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export function FilmFrame({ children, className = "", highlight = false }: FilmFrameProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        border: highlight ? "1px solid #5BBF45" : "1px solid #444",
      }}
    >
      {/* Top film holes */}
      <div
        className="flex items-center justify-center gap-2 px-4 py-3"
        style={{ backgroundColor: "#111", borderBottom: highlight ? "1px solid #5BBF4533" : "1px solid #333" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-6 h-4 rounded-[2px] shrink-0"
            style={{ backgroundColor: "#080808", border: "1px solid #333" }}
          />
        ))}
      </div>

      {children}

      {/* Bottom film holes */}
      <div
        className="flex items-center justify-center gap-2 px-4 py-3"
        style={{ backgroundColor: "#111", borderTop: highlight ? "1px solid #5BBF4533" : "1px solid #333" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="w-6 h-4 rounded-[2px] shrink-0"
            style={{ backgroundColor: "#080808", border: "1px solid #333" }}
          />
        ))}
      </div>
    </div>
  );
}