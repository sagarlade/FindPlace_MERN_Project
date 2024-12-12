/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  optimizeFonts: false,
  // middleware: [
  //   async function errorHandler(req, res, next) {
  //     try {
  //       await next();
  //     } catch (err) {
  //       console.error(err);
  //       res.status(500).send('Internal Server Error');
  //     }
  //   },
  // ],
  async rewrites() {
    return [
      {
        source: '/api/resources',
        destination: 'https://apikuslabs.com/assets/resources.json',
      },
    ];
  },
};

module.exports = nextConfig;
