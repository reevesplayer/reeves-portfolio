// ThemeSwitcher.js
import useDarkMode from "use-dark-mode";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

export const ThemeSwitcher = () => {
  const darkMode = useDarkMode(false);

  const toggleTheme = () => {
    if (darkMode.value) {
      darkMode.disable();
    } else {
      darkMode.enable();
    }
  };
  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={toggleTheme}
    >
    </Switch>
  );
};
