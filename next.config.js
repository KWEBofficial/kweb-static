/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false
  },
  // GitHub Pages 배포 설정
  output: 'export',
  trailingSlash: true,
  basePath: '/kweb-static',
  assetPrefix: '/kweb-static/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
