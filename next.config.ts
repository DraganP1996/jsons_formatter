import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@webeditors/react", "webeditors-vanilla"],
  outputFileTracingRoot: path.join(__dirname, "../"),
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
