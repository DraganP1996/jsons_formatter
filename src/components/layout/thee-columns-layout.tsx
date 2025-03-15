import { ReactNode } from "react";

type ThreeColumnsLayoutProps = {
  children: ReactNode;
};

export const ThreeColumnsLayout = ({ children }: ThreeColumnsLayoutProps) => {
  return (
    <div className="grid lg:grid-rows-[2fr,auto,2fr] xl:grid-rows-1 xl:grid-cols-[2fr,auto,2fr] lg:h-[calc(100vh-99px)] overflow-hidden">
      {children}
    </div>
  );
};
