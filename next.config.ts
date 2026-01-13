import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  swcMinify: false, // Try disabling SWC
};

export default nextConfig;
