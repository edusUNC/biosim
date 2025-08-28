/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración optimizada para Next.js 14
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
