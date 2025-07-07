import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true, // Disable Next.js image optimization
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'raw.githubusercontent.com',
    //     port: '',
    //     pathname: '/thanathon/portfolio/main/**',
    //   },
    // ],
  },
};

export default nextConfig;
