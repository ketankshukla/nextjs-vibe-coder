import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    disableOptimizedLoading: true,
    isrMemoryCacheSize: 0,
    clientRouterFilter: true,
    optimisticClientCache: true
  },
  reactStrictMode: true,
  swcMinify: true
};

export default nextConfig;
