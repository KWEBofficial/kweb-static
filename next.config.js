/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false
  }
  // GitHub Pages 배포 설정 (배포시 주석 해제)
  // output: 'export',
  // trailingSlash: true,
  // basePath: '/kweb-view',
  // assetPrefix: '/kweb-view/',
  // images: {
  //   unoptimized: true
  // }
}

module.exports = nextConfig
