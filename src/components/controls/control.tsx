import { ReactNode } from "react";

type ControlProps = {
  children: ReactNode;
  label?: string;
  isVisible: boolean;
};

export const Control = ({ label, children, isVisible }: ControlProps) => {
  return (
    isVisible && (
      <div className="flex flex-col">
        {label && <label className="text-xs text-gray-700 pl-1 hidden xl:inline"> {label} </label>}
        {children}
      </div>
    )
  );
};
