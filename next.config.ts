import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true, // This enables the 'use cache' directives
  },
  // Remove or comment out any 'turbo' configuration if it exists
  // turbo: { ... } // <- Remove this if you have it
  
  // Add these if you need them:
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
