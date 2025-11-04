import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const isVercel = !!process.env.VERCEL;
const isCloudflare = process.env.NEXT_BUNDLER_TARGET === "webpack" || !!process.env.WRANGLER_AUTH;

const nextConfig: NextConfig = {
  // Only add OpenNext for Cloudflare, not Vercel
  ...(isCloudflare && {
    serverExternalPackages: ['@opennextjs/cloudflare'],
    generateBuildId: async () => {
      return 'build-' + Date.now()
    },
  }),
  
  // Disable image optimization for both platforms
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// Initialize OpenNext Cloudflare only for development
if (!isVercel) {
  initOpenNextCloudflareForDev();
}
