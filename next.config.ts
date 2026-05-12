import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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
};

export default withNextIntl(nextConfig);
