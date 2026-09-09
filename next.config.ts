import type { NextConfig } from "next";

/**
 * Static export.
 *
 * `output: "export"` writes plain HTML/CSS/JS into `out/`. There is no server
 * at runtime, which is what lets GitHub Pages host this for free — and it is
 * why route handlers, middleware and server actions are unavailable here.
 *
 * `trailingSlash: true` makes every route a directory with an index.html, so
 * `/about/` resolves on a static host. Every internal href must end in "/".
 *
 * `images.unoptimized` is required: image optimisation needs a server.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
