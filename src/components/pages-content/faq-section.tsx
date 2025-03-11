import { ReactNode } from "react";

type FaqSectionProps = {
  children: ReactNode;
};

export const FaqSection = ({ children }: FaqSectionProps) => {
  return (
    <div className="flex flex-col gap-2 px-4">
      <h3 className="text-2xl font-semibold font-electrolize"> FAQ </h3>
      {children}
    </div>
  );
};
