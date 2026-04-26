import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.maskabutters.in",
      },
      {
        protocol: "https",
        hostname: "rms-patient-data.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: "/checkout/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://maps.googleapis.com; frame-src 'self' https://js.stripe.com https://hooks.stripe.com; connect-src 'self' https://api.stripe.com https://merchant-ui-api.stripe.com https://stripe.com/cookie-settings/enforcement-mode https://errors.stripe.com https://r.stripe.com https://ppm.stripe.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;",
          },
          {
            key: "Permissions-Policy",
            value: "compute-pressure=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
