import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@webeditors/react", "webeditors-vanilla"],
  outputFileTracingRoot: path.join(__dirname, "../"),
};

export default nextConfig;
