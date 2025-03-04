import { Dispatch, SetStateAction, useState } from "react";

export const useTheme = (): [string, Dispatch<SetStateAction<string>>] => {
  const [theme, setTheme] = useState("espresso");

  return [theme, setTheme];
};
