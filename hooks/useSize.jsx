import React, { useEffect, useState } from "react";

export default function useSize() {
  const [size, setSize] = useState("mobile");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSize("mobile");
      } else if (width < 1024) {
        setSize("tablet");
      } else {
        setSize("desktop");
      }
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return size;
}
