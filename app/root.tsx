import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";

// import { Footer } from "./components/layout/Footer";
import { SiteHeader } from "./components/navigation/SiteHeader";
import { SiteFooter } from "./components/layout/Footer";

import "./app.css";

export const links: Route.LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },

   {
    rel: "icon",
    href: "/favicon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
];

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <Meta />
        <Links />
      </head>

      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  // Removes trailing slashes so "/about/" matches "/about".
  const pathname =
    location.pathname.replace(/\/+$/, "") || "/";

  // Pages that display the navigation over their slideshow.
  const overlayHeaderPaths = ["/", "/about"];

  const usesOverlayHeader =
    overlayHeaderPaths.includes(pathname);

  return (
    <div className="relative flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="
          sr-only z-50
          focus:not-sr-only
          focus:fixed focus:left-4 focus:top-4
          focus:rounded-md
          focus:bg-white
          focus:px-4 focus:py-3
          focus:text-slate-950
          focus:shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-slate-950
        "
      >
        Skip to main content
      </a>

      <SiteHeader
        variant={
          usesOverlayHeader ? "overlay" : "solid"
        }
      />

      <main
        id="main-content"
        className="flex-1"
      >
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}

export function ErrorBoundary({
  error,
}: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";

    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (
    import.meta.env.DEV &&
    error &&
    error instanceof Error
  ) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>

      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}