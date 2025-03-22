import { ReactNode } from "react";

export type BasicPageConfiguration<PagePathsType> = {
  path: PagePathsType;
  order: number;
  name: string;
  shortName: string;
  description: string;
  keywords: string[];
  post?: ReactNode;
};
