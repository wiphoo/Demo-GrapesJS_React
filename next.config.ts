import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@opennextjs/cloudflare'],
  // OpenNext specific configurations
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Disable image optimization for Cloudflare Workers
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// Initialize OpenNext Cloudflare for development
initOpenNextCloudflareForDev();
