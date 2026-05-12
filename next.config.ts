import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // moved out of experimental
  cacheComponents: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
    rootParams: true,
  },
};

export default nextConfig;
