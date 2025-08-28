/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para Vercel
  async rewrites() {
    return [
      {
        source: '/simuladores/:path*',
        destination: '/simuladores/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/simuladores/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
