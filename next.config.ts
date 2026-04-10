import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
    cacheComponents: true,
    rootParams: true,
  },
};

export default nextConfig;
