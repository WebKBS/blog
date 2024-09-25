"use client";
import React, { useEffect, useRef } from "react";
import useThemeMode from "@/hooks/useThemeMode";

const Utterances = () => {
  const isLightTheme = useThemeMode(); // 커스텀 훅 사용
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Utterances가 이미 렌더링 되었는지 확인
    const existingScript = ref.current?.querySelector<HTMLIFrameElement>(
      "iframe.utterances-frame",
    );

    if (!existingScript) {
      // Utterances 스크립트가 없으면 추가
      const script = document.createElement("script");
      script.src = "https://utteranc.es/client.js";
      script.async = true;
      script.setAttribute("repo", "WebKBS/github-comments");
      script.setAttribute("issue-term", "title");
      script.setAttribute(
        "theme",
        isLightTheme ? "github-light" : "github-dark",
      );
      script.setAttribute("label", "comments");
      script.setAttribute("crossorigin", "anonymous");
      ref.current?.appendChild(script);
    } else {
      // 이미 존재하면 테마만 변경
      const message = {
        type: "set-theme",
        theme: isLightTheme ? "github-light" : "github-dark",
      };
      existingScript.contentWindow?.postMessage(message, "https://utteranc.es");
    }
  }, [isLightTheme]);

  return <div ref={ref} />;
};

export default Utterances;
