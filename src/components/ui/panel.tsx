"use client";

import { ReactNode, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PanelProps = {
  initialState: boolean;
  heading: ReactNode;
  children: ReactNode;
  wrapperClassName?: string;
};

export const Panel = ({ initialState, heading, children, wrapperClassName }: PanelProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const handlePanelClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div
      className={cn(
        "flex flex-col bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded cursor-pointer shadow",
        wrapperClassName
      )}
    >
      <div
        className="flex flex-row justify-between items-center cursor-pointer"
        onClick={handlePanelClick}
      >
        {heading}
        {isOpen ? <ChevronDown /> : <ChevronRight />}
      </div>
      {isOpen && <div className=""> {children} </div>}
    </div>
  );
};
