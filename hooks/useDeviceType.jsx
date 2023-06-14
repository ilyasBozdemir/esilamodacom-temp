import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const isBot = /(bot|googlebot|crawler|spider|robot|crawling)/i.test(userAgent);

    if (isBot) {
      setDeviceType("bot");
      return;
    }

    const isMobile = /Mobi/.test(userAgent);
    const isTablet = /(tablet|ipad|playbook)|(android(?!.*mobile))/i.test(userAgent);
    const isDesktop = !isMobile && !isTablet;

    if (isMobile) {
      setDeviceType("mobile");
    } else if (isTablet) {
      setDeviceType("tablet");
    } else if (isDesktop) {
      setDeviceType("desktop");
    }
  }, []);

  return deviceType;
};

export default useDeviceType;
