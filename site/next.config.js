/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'TFO Custom Kasm Repository',
    description: 'Kasm workspaces for TFO.',
    icon: 'https://myip4tfo.github.io/kasm-registry/1.0/kasmos-netutils.png',
    listUrl: 'https://myip4tfo.github.io/kasm-registry/',
    contactUrl: 'https://github.com/myip4tfo/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
