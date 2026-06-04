import { createBrowserRouter, Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function Root() {
  return (
    <div style={{ backgroundColor: "#080808", minHeight: "100vh" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center px-6"
      style={{ backgroundColor: "#080808" }}
    >
      <div
        className="text-xs tracking-[0.3em] uppercase mb-4"
        style={{ fontFamily: "'Space Mono', monospace", color: "#CCFF00" }}
      >
        404 — Scene Not Found
      </div>
      <h1
        className="uppercase mb-6"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "#f5f5f5",
          fontSize: "clamp(3rem, 8vw, 7rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        Cut.
      </h1>
      <p
        className="text-sm mb-8"
        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#555" }}
      >
        This page doesn't exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 text-sm tracking-widest uppercase"
        style={{ fontFamily: "'Space Mono', monospace", backgroundColor: "#CCFF00", color: "#080808" }}
      >
        Back to Home
      </a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "work/:id", Component: CaseStudyDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
