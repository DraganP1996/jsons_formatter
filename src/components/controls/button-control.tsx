import { ReactElement } from "react";

import { Button } from "../ui";

type ButtonControlProps = {
  variant: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost";
  icon: ReactElement;
  text: string;
  isVisible: boolean;
  onClick?: () => void;
};

export const ButtonControl = ({ variant, text, icon, isVisible, onClick }: ButtonControlProps) => {
  return (
    isVisible && (
      <Button
        variant={variant}
        className="justify-center md:w-[60px] xl:w-[110px] flex flex-row items-center font-semibold"
        onClick={onClick}
        aria-label={text}
      >
        <span className="hidden xl:inline"> {text} </span> {icon}
      </Button>
    )
  );
};
