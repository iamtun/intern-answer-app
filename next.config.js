/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URI_PROXY: process.env.API_URI_PROXY,
  },
};

module.exports = nextConfig;
