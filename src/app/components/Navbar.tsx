import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import filmReelSvg from "../../imports/Film-Reel.svg?url";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(91,191,69,0.12)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Film reel icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 1544 1250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300 group-hover:scale-110"
            >
              <path d="M625 0C812.921 0 981.47 82.9388 1096.04 214.206C1097.18 215.267 1098.23 216.449 1099.18 217.75C1099.32 217.939 1099.46 218.127 1099.6 218.315C1116.91 238.492 1132.95 259.784 1147.6 282.07C1165.31 306.908 1183.14 335.407 1199.84 372.654C1232.22 444.858 1260.63 549.645 1282.32 728.49C1308.88 947.49 1335.52 1025.21 1367.22 1068.8C1416.89 1137.1 1485.41 1165.72 1519.08 1166.51C1532.89 1166.83 1543.82 1178.28 1543.49 1192.08C1543.17 1205.89 1531.72 1216.82 1517.92 1216.49C1465.93 1215.28 1383.89 1176.72 1326.78 1098.2C1288 1044.88 1261.21 959.27 1235.68 758.637C1174.48 1039.6 924.311 1250 625 1250C279.822 1250 0 970.178 0 625C0 279.822 279.822 0 625 0ZM841.5 778C755.62 778 686 847.62 686 933.5C686 1019.38 755.62 1089 841.5 1089C927.38 1089 997 1019.38 997 933.5C997 847.62 927.38 778 841.5 778ZM414.5 771C328.62 771 259 840.62 259 926.5C259 1012.38 328.62 1082 414.5 1082C500.38 1082 570 1012.38 570 926.5C570 840.62 500.38 771 414.5 771ZM625 559C588.549 559 559 588.549 559 625C559 661.451 588.549 691 625 691C661.451 691 691 661.451 691 625C691 588.549 661.451 559 625 559ZM278.5 363C192.62 363 123 432.62 123 518.5C123 604.38 192.62 674 278.5 674C364.38 674 434 604.38 434 518.5C434 432.62 364.38 363 278.5 363ZM970.5 363C884.62 363 815 432.62 815 518.5C815 604.38 884.62 674 970.5 674C1056.38 674 1126 604.38 1126 518.5C1126 432.62 1056.38 363 970.5 363ZM624.5 105C538.62 105 469 174.62 469 260.5C469 346.38 538.62 416 624.5 416C710.38 416 780 346.38 780 260.5C780 174.62 710.38 105 624.5 105Z" fill="#6FD159"/>
            </svg>
            <span
              className="tracking-widest uppercase text-sm"
              style={{ fontFamily: "'Space Mono', monospace", color: "#f5f5f5" }}
            >
              CASEY JUDGE
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative text-sm tracking-widest uppercase transition-colors duration-200 group"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: isActive ? "#5BBF45" : "#bbb",
                  }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #4AA83C, #6FD159)",
                      width: isActive ? "100%" : "0%",
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" style={{ background: "linear-gradient(135deg, #4AA83C, #6FD159)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} />
            ) : (
              <Menu className="w-5 h-5" style={{ color: "#f5f5f5" }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden transition-all duration-300"
          style={{
            backgroundColor: "rgba(8,8,8,0.98)",
            paddingTop: "5rem",
          }}
        >
        <div className="flex flex-col items-center gap-10 mt-10">
          {links.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className="text-2xl tracking-widest uppercase"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: isActive ? "#5BBF45" : "#f5f5f5",
                }}
                onClick={() => window.scrollTo(0, 0)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
      )}
    </>
  );
}