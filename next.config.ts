import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    disableOptimizedLoading: true,
    clientRouterFilter: true,
    optimisticClientCache: true
  },
  reactStrictMode: true
};

export default nextConfig;
