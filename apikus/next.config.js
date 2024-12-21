/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  optimizeFonts: false,

  async rewrites() {
    return [
      {
        source: '/api/resources',
        destination: 'http://localhost:3001/assets/resources',
      },
    ];
  },
};

module.exports = nextConfig;
