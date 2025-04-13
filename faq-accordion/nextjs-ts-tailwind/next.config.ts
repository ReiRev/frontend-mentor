import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV !== "development";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  assetPrefix: isProd ? "/frontendmentor/faq-accordion/nextjs-ts-tailwind/" : "",
  basePath: isProd ? "/frontendmentor/faq-accordion/nextjs-ts-tailwind" : "",
  output: "export",
  distDir: "build",
};

export default nextConfig;
