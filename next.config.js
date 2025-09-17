/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  eslint: {
    // Disable ESLint during the build process
    ignoreDuringBuilds: true,
  },
  experimental: {
    // Force dynamic rendering for all pages to prevent SSR issues
    forceSwcTransforms: true,
  },
  webpack: (config, { isServer }) => {
    // Prevent framer-motion from being bundled on the server
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push("framer-motion");
    }
    return config;
  },
};

export default nextConfig;
