// NavBar.jsx
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import useDarkMode from "use-dark-mode";
import darkLogo from "./logo-dark.png"; // Adjust the path accordingly
import lightLogo from "./logo-light.png"; // Adjust the path accordingly

const NavBar = () => {
  const darkMode = useDarkMode(false);

  // Choose the appropriate logo source based on the current theme mode
  const logoSrc = darkMode.value ? darkLogo : lightLogo;

  return (
    <Navbar>
      <NavbarBrand>
        <img src={logoSrc} alt="Logo" className="hidden" />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
