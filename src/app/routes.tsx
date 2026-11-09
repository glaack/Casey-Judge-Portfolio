import { Outlet, useLocation, type RouteObject } from "react-router";
import { useEffect } from "react";
import { canonicalUrl, getRouteMeta } from "./seo";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";
import { About } from "./pages/About";

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Keeps the title, description and canonical URL in sync on client-side navigation. */
function HeadSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const url = canonicalUrl(meta.path);
    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);
  }, [pathname]);
  return null;
}

function Root() {
  return (
    <div
      style={{ backgroundColor: "#080808", minHeight: "100vh" }}
    >
      <HeadSync />
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
        style={{
          fontFamily: "'Space Mono', monospace",
          background:
            "linear-gradient(135deg, #4AA83C, #6FD159)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404 — Page Not Found
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
        Oops
      </h1>
      <p
        className="text-base leading-relaxed mb-8 max-w-sm"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "#bbb",
        }}
      >
        This page doesn't exist.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-5 py-3 text-sm tracking-widest uppercase transition-all duration-200 hover:gap-3"
        style={{
          fontFamily: "'Space Mono', monospace",
          background:
            "linear-gradient(135deg, #4AA83C, #6FD159)",
          color: "#080808",
        }}
      >
        Back to Home
      </a>
    </div>
  );
}

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "work/:id", Component: CaseStudyDetail },
      { path: "about", Component: About },
      { path: "*", Component: NotFound },
    ],
  },
];
