/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_NODE_URL: process.env.API_NODE_URL,
  },
};

module.exports = nextConfig;
