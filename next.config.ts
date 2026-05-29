import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    rootParams: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: [
    "@swc/core",
    "@swc/core-linux-x64-gnu",
    "@swc/core-linux-x64-musl",
    "@swc/wasm",
  ],
};

export default withNextIntl(nextConfig);
