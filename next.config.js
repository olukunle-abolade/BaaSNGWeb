/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

// next.config.js
// module.exports = withPlugins([], {
//   webpack(config) {
//     config.externals = [
//       ...config.externals,
//       { reactapexcharts: 'react-apexcharts' },
//     ];

//     return config;
//   },
// });

module.exports = nextConfig;
