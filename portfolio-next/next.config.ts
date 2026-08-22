import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // Generate fully-static HTML/CSS/JS in `out/`
  basePath: "/Ayan-Hussain",  // GitHub Pages serves from this subpath
  assetPrefix: "/Ayan-Hussain/",
  images: {
    unoptimized: true,        // next/image requires a server; static export uses plain <img>
  },
  trailingSlash: true,        // Avoids 404 on GitHub Pages when navigating directly to a path
};

export default nextConfig;
