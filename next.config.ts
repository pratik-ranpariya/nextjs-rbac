import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['dynamicbusiness.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dynamicbusiness.com',
        port: '',
        pathname: '/7.x/**',
      },
    ],
  },
};

export default nextConfig;
