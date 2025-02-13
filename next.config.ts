import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/I/**",
        search: "",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
