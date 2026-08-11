import type { NextConfig } from "next";

const repo = "x-learning-on-x";
const isGhPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // GitHub project pages: https://am5188.github.io/x-learning-on-x/
  basePath: isGhPages ? `/${repo}` : "",
  assetPrefix: isGhPages ? `/${repo}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
