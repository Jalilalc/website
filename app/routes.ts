import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  // The index route represents the homepage at "/".
  index("routes/home.tsx"),

  // Each route connects a URL to a route component.
  route("about", "./routes/about.tsx"),

  route("notices", "./routes/notices.tsx"),

  route("applications", "./routes/applications.tsx"),

  route("contact", "./routes/contact.tsx"),

  route("accessibility", "./routes/accessibility.tsx"),

  route("privacy", "./routes/privacy.tsx"),
] satisfies RouteConfig;