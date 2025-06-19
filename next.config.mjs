/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    unoptimized: true,
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
