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
};

export default nextConfig;
