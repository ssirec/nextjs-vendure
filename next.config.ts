import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false, // REQUIRED for Cloudflare
  },
  output: "standalone",
};

export default nextConfig;
