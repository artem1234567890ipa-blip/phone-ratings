import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 86400, // 24h cache
    remotePatterns: [
      { protocol: "https", hostname: "wsrv.nl" },
      { protocol: "https", hostname: "images.weserv.nl" },
      { protocol: "https", hostname: "fdn2.gsmarena.com" },
      { protocol: "https", hostname: "store.storeimages.cdn-apple.com" },
      { protocol: "https", hostname: "images.samsung.com" },
      { protocol: "https", hostname: "i02.appmifile.com" },
      { protocol: "https", hostname: "image01.oneplus.net" },
      { protocol: "https", hostname: "**.gsmarena.com" },
      { protocol: "https", hostname: "**.gsmchoice.com" },
    ],
  },
};

export default nextConfig;
