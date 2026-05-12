import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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

  webpack: (config) => {
    config.resolve.alias["next-intl/config"] = path.resolve(
      "./src/i18n/request.ts"
    );
    return config;
  },
};

export default nextConfig;
