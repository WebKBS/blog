"use client";

import React, { useEffect, useState } from "react";
import { throttle } from "lodash";

const OuterHeight = ({ className }: { className?: string }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = throttle(() => {
        setHeight(window.outerHeight);
      }, 300);

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <p className={className}>{height}</p>;
};

export default OuterHeight;
