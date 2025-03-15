import { ReactNode } from "react";

type ConverterAdditionalContentProps = {
  children: ReactNode;
};

export const ConverterAdditionalContent = ({ children }: ConverterAdditionalContentProps) => {
  return (
    <div className="flex flex-col text-md justify-center items-center">
      <div className="lg:w-[900px] p-4 flex flex-col gap-2">{children}</div>
    </div>
  );
};
