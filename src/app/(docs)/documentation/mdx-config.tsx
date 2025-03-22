/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { ReactNode } from "react";

export const HeaderComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-6xl font-bold font-electrolize my-2">{children} </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-4xl font-bold font-electrolize my-3">{children} </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-3xl font-bold font-electrolize my-3">{children} </h3>
  ),
  h4: ({ children }: { children: ReactNode }) => (
    <h4 className="text-2xl font-bold font-electrolize my-3">{children} </h4>
  ),
  h5: ({ children }: { children: ReactNode }) => (
    <h5 className="text-xl font-bold font-electrolize my-2">{children} </h5>
  ),
  h6: ({ children }: { children: ReactNode }) => (
    <h6 className="text-lg font-bold font-electrolize my-2">{children} </h6>
  ),
  table: (props: any) => <table className="border-collapse border border-gray-300" {...props} />,
  thead: (props: any) => <thead className="bg-slate-200" {...props} />,
  th: (props: any) => <th className="border border-gray-400 p-2" {...props} />,
  td: (props: any) => <td className="border border-gray-400 p-2" {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr {...props} className="text-sm" />,
};

export const GeneralComponents = {
  hr: () => <hr className="my-4 text-slate-600" />,
};

export const BoxLink = {
  a: ({ href, children }: { href: string; children: ReactNode }) => (
    <Link
      href={href}
      className="flex p-6 bg-gray-300 hover:bg-gray-400 w-full my-1 rounded no-underline font-semibold font-electrolize"
    >
      {" "}
      {children}{" "}
    </Link>
  ),
};
