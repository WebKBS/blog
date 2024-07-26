"use client";
import { useState } from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

const TranslateButton = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    const element = document.getElementById("google_translate_element");
    if (element) {
      element.style.display = visible ? "none" : "block";
    }
    setVisible(!visible);
  };

  return (
    <Button
      onClick={handleClick}
      aria-label="Translate"
      className="w-9 h-9"
      size="icon"
      type="button"
      variant="secondary"
      id="translate_button"
    >
      <Languages />
    </Button>
  );
};

export default TranslateButton;
