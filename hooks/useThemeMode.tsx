import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const useThemeMode = () => {
  const { resolvedTheme } = useTheme();
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setIsLightTheme(false);
    } else {
      setIsLightTheme(true);
    }
  }, [resolvedTheme]);

  return isLightTheme;
};

export default useThemeMode;
