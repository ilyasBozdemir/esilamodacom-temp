import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Icon, useColorMode, Button } from "@chakra-ui/react";

const Sun = () => {
  return <Icon color={"yellow.200"} as={FiSun} />;
};
const Moon = () => {
  return <Icon color={"gray.800"} as={FiMoon} />;
};

function ToggleDarkModeButton() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const handleToggleDarkMode = () => {
    if (isDarkMode) setColorMode("dark");
    else setColorMode("light");
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <Button
        onClick={handleToggleDarkMode}
        size="md"
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <Icon as={isDark ? Sun : Moon} />
      </Button>
    </>
  );
}

export default ToggleDarkModeButton;
