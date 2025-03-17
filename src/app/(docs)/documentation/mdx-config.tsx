import { ReactNode } from "react";

export const HeaderComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-6xl font-bold font-electrolize mb-2">{children} </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-4xl font-bold font-electrolize mt-6">{children} </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-3xl font-bold font-electrolize mt-6">{children} </h3>
  ),
};

export const GeneralComponents = {
  hr: () => <hr className="my-4 text-slate-600" />,
};
