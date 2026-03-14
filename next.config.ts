import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      { hostname: "img.clerk.com" }
    ]
  }
};

export default withSentryConfig(nextConfig, {
  org: "jsmpro",
  project: "jsm_converso",

  silent: !process.env.CI,
  widenClientFileUpload: true,

  webpack: {
    treeshake: {
      removeDebugLogging: true
    },
    automaticVercelMonitors: true
  }
});