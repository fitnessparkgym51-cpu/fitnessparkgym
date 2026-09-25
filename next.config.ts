import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;
