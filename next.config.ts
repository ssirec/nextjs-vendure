// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Remove or update the experimental.turbo section */
  experimental: {
    cacheComponents: true, // Add this for use cache directives
    // Remove or comment out: turbo: { ... }
  },
  // ... rest of your config
};

export default nextConfig;
