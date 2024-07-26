"use client";
import { useEffect } from "react";
import Script from "next/script";

const GoogleTranslate = () => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const googleTranslateElement = document.getElementById(
        "google_translate_element",
      );
      const translateButton = document.getElementById("translate_button");

      if (
        googleTranslateElement &&
        !googleTranslateElement.contains(event.target as Node) &&
        (!translateButton || !translateButton.contains(event.target as Node))
      ) {
        googleTranslateElement.style.display = "none";
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
        id="google-translate-script"
        onLoad={() => {
          window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "ko",
                includedLanguages: "en,ko,ja,de,zh-CN,zh-TW",
              },
              "google_translate_element",
            );
          };
        }}
      />
      <div
        id="google_translate_element"
        style={{ display: "none" }}
        className="absolute right-0 top-[50px] min-w-[160px] bg-white px-[16px]"
      />
    </>
  );
};

export default GoogleTranslate;
