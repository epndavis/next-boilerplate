/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // NOTE: This is needed for hot reloading in docker because of 
  // this issue https://github.com/microsoft/WSL/issues/4739
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  },
  output: 'standalone',
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
