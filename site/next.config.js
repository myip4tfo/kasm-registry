/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'TFO Custom Kasm Repository',
    description: 'Kasm workspaces for TFO.',
    icon: 'https://myip4tfo.github.io/kasm-registry/icons/kasmos-desktop-netutils.png',
    listUrl: 'https://myip4tfo.github.io/kasm-registry/',
    contactUrl: 'https://github.com/myip4tfo/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
