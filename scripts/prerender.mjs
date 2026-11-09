// Renders every route to its own static HTML file so GitHub Pages serves real
// pages (HTTP 200, with content and per-page meta tags) instead of the 404 fallback.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, canonicalUrl, getAllRoutes, getRouteMeta, personJsonLd, websiteJsonLd } = await import(
  pathToFileURL(ssrEntry).href
);

const SITE_URL = "https://www.caseyjudge.com";
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const portrait = fs.readdirSync(path.join(dist, "assets")).find((f) => /^Me1-.*\.jpe?g$/.test(f));
const ogImage = portrait ? `${SITE_URL}/assets/${portrait}` : null;

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

function head(route) {
  const meta = getRouteMeta(route);
  const url = canonicalUrl(route);
  const t = esc(meta.title);
  const d = esc(meta.description);
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="author" content="Casey Judge" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${route === "/about" ? "profile" : "website"}" />`,
    `<meta property="og:site_name" content="Casey Judge" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    ogImage && `<meta property="og:image" content="${ogImage}" />`,
    ogImage && `<meta property="og:image:alt" content="Portrait of Casey Judge" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    ogImage && `<meta name="twitter:image" content="${ogImage}" />`,
    jsonLd(personJsonLd),
    route === "/" && jsonLd(websiteJsonLd),
  ]
    .filter(Boolean)
    .join("\n    ");
}

const SEO_BLOCK = /<!--seo-start-->[\s\S]*?<!--seo-end-->/;
if (!SEO_BLOCK.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error("index.html is missing the <!--seo-start-->…<!--seo-end--> block or empty #root");
}

const routes = getAllRoutes();
for (const route of routes) {
  const appHtml = await render(route);
  const html = template
    .replace(SEO_BLOCK, head(route))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const outDir = route === "/" ? dist : path.join(dist, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  console.log(`prerendered ${route}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${canonicalUrl(r)}</loc><lastmod>${today}</lastmod><priority>${
        r === "/" ? "1.0" : r === "/about" || r === "/work" ? "0.8" : "0.6"
      }</priority></url>`
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`wrote sitemap.xml with ${routes.length} URLs`);
