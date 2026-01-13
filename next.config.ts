import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    turbo: false, // Disable Turbopack to avoid LightningCSS issue
  },
};

export default nextConfig;
