import { caseStudies } from "./data/caseStudies";

export const SITE_URL = "https://www.caseyjudge.com";
export const SITE_NAME = "Casey Judge";

const DEFAULT_DESCRIPTION =
  "Casey Judge is a Senior UX Researcher with 8+ years of experience in film and immersive entertainment, turning human behavior into clear design direction for innovative tools.";

export interface RouteMeta {
  title: string;
  description: string;
  path: string;
}

/** Title and description for each route; used by the prerender step and on client navigation. */
export function getRouteMeta(pathname: string): RouteMeta {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/") {
    return {
      path: "/",
      title: "Casey Judge — Senior UX Researcher",
      description: DEFAULT_DESCRIPTION,
    };
  }
  if (path === "/work") {
    return {
      path: "/work",
      title: "Work — Casey Judge, Senior UX Researcher",
      description:
        "UX research case studies by Casey Judge: VFX software, augmented reality tabletop gaming, the uncanny valley, and more.",
    };
  }
  if (path === "/about") {
    return {
      path: "/about",
      title: "About Casey Judge — Senior UX Researcher",
      description:
        "Casey Judge is a Senior UX Researcher at Wētā FX and an adjunct professor at New York University, based in Brooklyn, NY.",
    };
  }
  const match = path.match(/^\/work\/([^/]+)$/);
  const study = match && caseStudies.find((s) => s.id === match[1]);
  if (study) {
    return {
      path,
      title: `${study.title} — Casey Judge`,
      description: `${study.subtitle}. A ${study.medium.toLowerCase()} case study by Senior UX Researcher Casey Judge.`,
    };
  }
  return { path, title: "Page Not Found — Casey Judge", description: DEFAULT_DESCRIPTION };
}

/** Absolute canonical URL. GitHub Pages serves /about from about/index.html and redirects /about to /about/. */
export function canonicalUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path.replace(/\/+$/, "")}/`;
}

/** Every route that should be prerendered and listed in the sitemap. */
export function getAllRoutes(): string[] {
  return ["/", "/work", "/about", ...caseStudies.map((s) => `/work/${s.id}`)];
}

/** schema.org Person data so Google can tie both names to this site. */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Casey Judge",
  alternateName: "Acacia Judge",
  url: `${SITE_URL}/`,
  jobTitle: "Senior UX Researcher",
  description: DEFAULT_DESCRIPTION,
  worksFor: { "@type": "Organization", name: "Wētā FX", url: "https://www.wetafx.co.nz/" },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "New York University",
    url: "https://www.nyu.edu/",
  },
  address: { "@type": "PostalAddress", addressLocality: "Brooklyn", addressRegion: "NY", addressCountry: "US" },
  knowsAbout: ["UX Research", "Design Research", "Visual Effects Software", "Augmented Reality", "Uncanny Valley"],
  sameAs: ["https://www.linkedin.com/in/acacia-judge", "https://www.imdb.com/name/nm6516608/"],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: ["Acacia Judge", "Casey Judge Portfolio"],
  url: `${SITE_URL}/`,
  author: { "@id": `${SITE_URL}/#person` },
};
