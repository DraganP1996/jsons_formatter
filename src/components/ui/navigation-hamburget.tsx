import { MenuIcon } from "lucide-react";

import { Button } from "./button";

type NavigationHamburgerProps = {
  onClick: () => void;
};

export const NavigationHamburger = ({ onClick }: NavigationHamburgerProps) => {
  return (
    <Button variant="secondary" aria-label="Mobile navigation menu" onClick={onClick}>
      <MenuIcon />
    </Button>
  );
};
