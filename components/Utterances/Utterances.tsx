'use client';
import useThemeMode from '@/hooks/useThemeMode';
import { useEffect, useRef } from 'react';

const Utterances = () => {
  const isLightTheme = useThemeMode(); // 커스텀 훅 사용
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // Utterances가 이미 렌더링 되었는지 확인
  //   const existingScript = ref.current?.querySelector<HTMLIFrameElement>(
  //     'iframe.utterances-frame'
  //   );

  //   // if (!existingScript) {
  //   //   // Utterances 스크립트가 없으면 추가
  //   //   const script = document.createElement("script");
  //   //   script.src = "https://utteranc.es/client.js";
  //   //   script.async = true;
  //   //   script.setAttribute("repo", "WebKBS/github-comments");
  //   //   script.setAttribute("issue-term", "title");
  //   //   script.setAttribute(
  //   //     "theme",
  //   //     isLightTheme ? "github-light" : "github-dark",
  //   //   );
  //   //   script.setAttribute("label", "comments");
  //   //   script.setAttribute("crossorigin", "anonymous");
  //   //   ref.current?.appendChild(script);
  //   // } else {
  //   //   // 이미 존재하면 테마만 변경
  //   //   const message = {
  //   //     type: "set-theme",
  //   //     theme: isLightTheme ? "github-light" : "github-dark",
  //   //   };
  //   //   existingScript.contentWindow?.postMessage(message, "https://utteranc.es");
  //   // }
  // }, [isLightTheme]);

  useEffect(() => {
    // giscus가 이미 렌더링 되었는지 확인
    const existingScript = ref.current?.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame'
    );

    if (existingScript) {
      // 이미 존재하는 경우 메시지로 테마만 변경
      const message = {
        giscus: {
          setConfig: {
            theme: isLightTheme ? 'light' : 'dark_dimmed',
          },
        },
      };
      existingScript.contentWindow?.postMessage(message, 'https://giscus.app');
    } else {
      // 처음 렌더링하는 경우 스크립트 생성
      const script = document.createElement('script');
      script.src = 'https://giscus.app/client.js';
      script.async = true;
      script.setAttribute('data-repo', 'WebKBS/github-comments');
      script.setAttribute('data-repo-id', 'R_kgDOM2084A');
      script.setAttribute('data-category', 'Comments');
      script.setAttribute('data-category-id', 'DIC_kwDOM2084M4Cjtd5');
      script.setAttribute('data-mapping', 'title');
      script.setAttribute('data-strict', '0');
      script.setAttribute('data-reactions-enabled', '1');
      script.setAttribute('data-emit-metadata', '0');
      script.setAttribute('data-input-position', 'bottom');
      script.setAttribute('data-theme', isLightTheme ? 'light' : 'dark_dimmed');
      script.setAttribute('data-lang', 'ko');
      script.setAttribute('crossorigin', 'anonymous');
      ref.current?.appendChild(script);
    }
  }, [isLightTheme]);

  return <div ref={ref} />;
};

export default Utterances;
