import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Remove the experimental.turbo property
  experimental: {
    // Other experimental features if any
  },
};

export default nextConfig;
