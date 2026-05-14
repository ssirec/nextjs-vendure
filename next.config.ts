import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "@swc/core",
    "@swc/core-linux-x64-gnu",
    "@swc/core-linux-x64-musl",
    "@swc/wasm",
  ],
};

export default nextConfig;
