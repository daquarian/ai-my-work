/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.clerk.com', 'cdn.brandfetch.io'],
  },
}

module.exports = nextConfig
