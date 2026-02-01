/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
};

export default nextConfig;
