// File: next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Tell Next.js to export as a static site
  output: 'export',

  // 2. Set the base path to your repo name
  basePath: '/electrical-comparator',

  // 3. Set the asset prefix to your repo name
  assetPrefix: '/electrical-comparator/',

  // 4. Disable image optimization (not supported on static sites)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;