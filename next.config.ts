import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Top-level in Next.js 16+ (NOT under experimental)
  serverExternalPackages: [
    "@swc/core",
    "@swc/core-linux-x64-gnu",
    "@swc/core-linux-x64-musl",
    "@swc/wasm",
  ],
};

export default nextConfig;
