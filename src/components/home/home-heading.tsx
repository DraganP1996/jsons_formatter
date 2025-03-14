import { ReactNode } from "react";

import HomePost from "../../posts/home.mdx";

export const HomeHeading = () => {
  return (
    <div>
      <HomePost
        components={{
          h1: ({ children }: { children: ReactNode }) => (
            <h1 className="text-6xl text-orange-500 font-electrolize font-bold mb-2">
              {" "}
              {children}{" "}
            </h1>
          ),
          h2: ({ children }: { children: ReactNode }) => (
            <p className="text-xl font-anta text-gray-600 leading-6"> {children} </p>
          ),
        }}
      />
    </div>
  );
};
