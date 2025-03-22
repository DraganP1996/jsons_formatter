import { SUPPORTED_FRAMEWORDS } from "@/types";
import { ReactNode } from "react";

export async function generateStaticParams() {
  return SUPPORTED_FRAMEWORDS.map((path) => ({
    framework: path,
  }));
}

export const dynamicParams = false;

export default function Layout({ children }: { children: ReactNode }) {
  return <> {children} </>;
}
