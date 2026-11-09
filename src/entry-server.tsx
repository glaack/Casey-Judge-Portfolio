// Server entry used only at build time (scripts/prerender.mjs) to render each route to static HTML.
import { renderToString } from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router";
import { routes } from "./app/routes";
import { canonicalUrl, getAllRoutes, getRouteMeta, personJsonLd, websiteJsonLd } from "./app/seo";

export { canonicalUrl, getAllRoutes, getRouteMeta, personJsonLd, websiteJsonLd };

const handler = createStaticHandler(routes);

export async function render(pathname: string): Promise<string> {
  const request = new Request(`http://localhost${pathname}`);
  const context = await handler.query(request);
  if (context instanceof Response) throw new Error(`Route ${pathname} redirected`);
  const router = createStaticRouter(handler.dataRoutes, context);
  return renderToString(<StaticRouterProvider router={router} context={context} hydrate={false} />);
}
