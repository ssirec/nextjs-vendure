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
    turbo: {
      resolveAlias: {
        "next-intl/config": path.resolve("./src/i18n/request.ts"),
      },
    },
  },
};

export default nextConfig;
