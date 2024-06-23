"use client";
import React from "react";
import { ArrowUpToLine } from "lucide-react";

const ScrollUpButton = () => {
  return (
    <button
      className="fixed bottom-4 right-4 xl:bottom-8 xl:right-8 z-10 bg-gray-400 px-2 py-2 rounded-full"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <ArrowUpToLine color="#000" size={20} />
    </button>
  );
};

export default ScrollUpButton;
