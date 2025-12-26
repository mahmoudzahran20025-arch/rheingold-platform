import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export unless using a custom loader
  },
  // Ensure trailing slashes for better compatibility with static hosting
  trailingSlash: true,
};

export default nextConfig;
