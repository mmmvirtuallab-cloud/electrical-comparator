// File: next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/electrical-comparator',
  assetPrefix: '/electrical-comparator/',
  images: {
    unoptimized: true,
  },

  // ADD THIS LINE
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;