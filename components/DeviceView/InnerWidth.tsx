"use client";

import React, { useEffect, useState } from "react";
import { throttle } from "lodash";

const InnerWidth = ({ className }: { className?: string }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = throttle(() => {
        setWidth(window.innerWidth);
      }, 300);

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return <p className={className}>{width}</p>;
};

export default InnerWidth;
