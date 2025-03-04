import { ReactNode } from "react";

type ThreeColumnsLayoutProps = {
  children: ReactNode;
};

export const ThreeColumnsLayout = ({ children }: ThreeColumnsLayoutProps) => {
  return (
    <div className="grid grid-cols-[2fr,auto,2fr] h-[calc(100vh-99px)] overflow-hidden">
      {children}
    </div>
  );
};
