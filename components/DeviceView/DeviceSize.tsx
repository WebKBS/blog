"use client";

import React, { useEffect, useState } from "react";
import { throttle } from "lodash";

const DeviceSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = throttle(() => {
        setSize({
          width: window.outerWidth,
          height: window.outerHeight,
        });
      }, 500);

      window.addEventListener("resize", handleResize);
      handleResize(); // 초기 크기 설정
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="flex items-center justify-center gap-1">
      <p>{size.width}</p>
      <span>x</span>
      <p>{size.height}</p>
    </div>
  );
};
export default DeviceSize;
