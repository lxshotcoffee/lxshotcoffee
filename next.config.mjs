/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/lxshotcoffee',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '/lxshotcoffee',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
