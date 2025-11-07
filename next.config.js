/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false
  },
  // GitHub Pages 배포 설정 (프로덕션에서만 적용)
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    //basePath: '/kweb-static',
    //assetPrefix: '/kweb-static',
    images: {
      unoptimized: true
    }
  })
}

module.exports = nextConfig
