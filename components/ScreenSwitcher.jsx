import React from "react";

const ScreenSwitcher = ({ step, screens }) => {
  const currentScreen = screens.find((screen) => screen.step === step);

  return <>{currentScreen && currentScreen.component}</>;
};

export default ScreenSwitcher;
