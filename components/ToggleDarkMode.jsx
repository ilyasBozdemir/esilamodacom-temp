import { Box, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const { colorMode, setColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const handleToggleDarkMode = () => {
    if (isDarkMode) setColorMode("dark");
    else setColorMode("light");
    setIsDarkMode(!isDarkMode);
  };

  const Sun = () => {
    return <Icon color={"yellow.200"} as={FaSun} />;
  };
  const Moon = () => {
    return <Icon color={"gray.800"} as={FaMoon} />;
  };
  return (
    <>
      <Switch
        size="md"
        isChecked={!isDarkMode}
        icon={<Box as={!isDarkMode ? Sun : Moon} />}
        sx={{
          "& .chakra-switch__thumb": {
            backgroundImage: `url(${!isDarkMode ? Sun : Moon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "60%",
          },
        }}
        onChange={handleToggleDarkMode}
      />
    </>
  );
}

export default ToggleDarkMode;
