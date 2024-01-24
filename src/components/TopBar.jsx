import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import useDarkMode from "use-dark-mode";
import darkLogo from "./logo-dark.svg"; // Adjust the path accordingly
import lightLogo from "./logo-light.svg"; // Adjust the path accordingly

const TopBar = () => {
  const darkMode = useDarkMode(false);

  // Choose the appropriate logo source based on the current theme mode
  const logoSrc = darkMode.value ? darkLogo : lightLogo;

  return (
    <div className="flex justify-between items-center py-7 px-5 sm:px-28">
      <div>
        <img src={logoSrc} alt="Logo" className="w-auto" />
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default TopBar;
