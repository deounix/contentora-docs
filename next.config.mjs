import { createMDX } from 'fumadocs-mdx/next';

const config = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/contentora-docs',
  images: { unoptimized: true },
};

const withMDX = createMDX({});

export default withMDX(config);
