/* eslint-disable @typescript-eslint/no-require-imports */
import createMDX from "@next/mdx";
// import path from "path";
// import { fileURLToPath } from "url";
import remarkGfm from "remark-gfm";

// const __dirname = fileURLToPath(new URL(".", import.meta.url));

const nextConfig = {
  transpilePackages: ["@webeditors/react", "webeditors-vanilla"],
  // outputFileTracingRoot: path.join(__dirname, "../"),
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

console.log("🔍 Starting Next.js with MDX support...");

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGfm], rehypePlugins: [] },
});

export default withMDX(nextConfig);
