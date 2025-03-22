import { XIcon } from "lucide-react";
import { Button } from "../ui";
import { ReactNode } from "react";

type MobileNavigationProps = {
  children: ReactNode;
  onCloseMenu: () => void;
};

export const MobileNavigation = ({ children, onCloseMenu }: MobileNavigationProps) => {
  return (
    <div className="fixed w-full h-full bg-orange-400 top-0 left-0 z-50 flex flex-col">
      <div className="flex justify-end items-center p-2">
        <Button variant="ghost" onClick={onCloseMenu}>
          <XIcon />
        </Button>
      </div>
      {children}
    </div>
  );
};
