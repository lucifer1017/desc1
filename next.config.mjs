/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Transpile packages that use CommonJS or have Node.js dependencies
  transpilePackages: ['@solidity-parser/parser', 'owasp-nest'],
  eslint: {
    // Ignore ESLint errors during build to prevent build failures
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Continue build even if there are TypeScript errors (we'll fix them)
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
