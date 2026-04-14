import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old blog post URLs: /blog/posts/slug.html → /blog/slug
      {
        source: '/blog/posts/:slug.html',
        destination: '/blog/:slug',
        permanent: true,
      },
      // Old blog post URLs without .html (cleanUrls was enabled)
      {
        source: '/blog/posts/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      // Old retreat subpage URLs
      {
        source: '/retreat-pricing',
        destination: '/retreat/pricing',
        permanent: true,
      },
      {
        source: '/retreat-participants',
        destination: '/retreat/participants',
        permanent: true,
      },
      // Legacy blueprint .html URLs
      {
        source: '/blueprints/index.html',
        destination: '/blueprints',
        permanent: true,
      },
      {
        source: '/blueprints/:slug.html',
        destination: '/blueprints/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
