import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns : [
      {
        protocol : 'https',
        hostname : 'camo.githubusercontent.com',
      },
      {
        protocol : 'https',
        hostname : 'cloud.appwrite.io'
      }
    ]
  },
  experimental : {
    serverActions : {
      bodySizeLimit : "100mb"
    }
  }
};

export default nextConfig;
