/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // Removed basePath as site is deployed to root domain
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'randomuser.me' },
    ],
  },
  transpilePackages: ['framer-motion'],
}

module.exports = nextConfig
