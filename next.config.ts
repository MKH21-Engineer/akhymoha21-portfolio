import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  allowedDevOrigins: ['*.local', '10.*.*.*'],
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options',        value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy',        value: 'strict-origin-when-cross-origin' },
      ],
    }]
  },
}

export default nextConfig