import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV !== "development";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  assetPrefix: isProd ? "/frontendmentor/results-summary-component/nextjs-ts-tailwind/" : "",
  basePath: isProd ? "/frontendmentor/results-summary-component/nextjs-ts-tailwind" : "",
  output: "export",
  distDir: "build",
};

export default nextConfig;
