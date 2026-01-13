import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true, // Moved from experimental.cacheComponents
  // Remove the eslint and typescript config if you have them
  // eslint: { ... } // Remove this
  // typescript: { ... } // Remove this
};

export default nextConfig;
