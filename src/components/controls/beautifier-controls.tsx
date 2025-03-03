import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TabSizes } from "@/types";

const THEMES = [
  "amy",
  "ayuLight",
  "barf",
  "bespin",
  "birdsOfParadise",
  "boysAndGirls",
  "clouds",
  "cobalt",
  "coolGlow",
  "dracula",
  "espresso",
  "noctisLilac",
  "rosePineDawn",
  "smoothy",
  "solarizedLight",
  "tomorrow",
];

type BeautifierControlsProps = {
  tabSize?: TabSizes;
  changeTabSize?: (tabSize: TabSizes) => void;
  changeTheme: (theme: string) => void;
};

export const BeautifierControls = ({
  tabSize,
  changeTabSize,
  changeTheme,
}: BeautifierControlsProps) => {
  const handleValueChange = (value: string) => {
    const numericValue = +value;

    if (isNaN(numericValue)) return;

    if (changeTabSize) changeTabSize(numericValue as TabSizes);
  };

  const themeSelect = (
    <Select onValueChange={changeTheme}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Editor theme" />
      </SelectTrigger>
      <SelectContent>
        {THEMES.map((theme) => (
          <SelectItem key={theme} value={theme}>
            {" "}
            {theme}{" "}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  const tabSizeSelect = (
    <Select onValueChange={handleValueChange} value={`${tabSize}`}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Space Tab" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1 Space Tab </SelectItem>
        <SelectItem value="2">2 Space Tab</SelectItem>
        <SelectItem value="3">3 Space Tab</SelectItem>
        <SelectItem value="4">4 Space Tab</SelectItem>
        <SelectItem value="0">Compact</SelectItem>
      </SelectContent>
    </Select>
  );

  return (
    <div className="flex flex-col items-center py-2 gap-2">
      {themeSelect} {changeTabSize && tabSizeSelect}
    </div>
  );
};
