/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Add this compiler section:
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
