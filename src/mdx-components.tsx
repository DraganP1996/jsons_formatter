import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => <h1 style={{ color: "red", fontSize: "48px" }}>{children}</h1>,
    li: ({ children }) => <li className="pt-2 ml-4 list-disc"> {children} </li>,
    ...components,
  };
}
