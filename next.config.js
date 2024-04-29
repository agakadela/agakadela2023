/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.hashnode.com', 'via.placeholder.com', 'images.unsplash.com'],
  },
};

module.exports = withContentlayer(nextConfig);
