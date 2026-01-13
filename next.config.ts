import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Remove swcMinify - it's not valid in Next.js 16
};

export default nextConfig;
