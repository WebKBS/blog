'use client';
import { SquareArrowOutUpRight } from 'lucide-react';
import { useState } from 'react';

const ShareButton = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const shareHandler = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
        console.log('공유 성공!');
      } catch (error) {
        console.error('공유 실패:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess(true);
        console.log('클립보드에 복사되었습니다!');

        setTimeout(() => {
          setCopySuccess(false);
        }, 2000);
      } catch (error) {
        console.error('클립보드에 복사 실패:', error);
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      <button onClick={shareHandler} className="flex items-center gap-2">
        공유하기
        <SquareArrowOutUpRight />
      </button>
      {copySuccess && (
        <p className="absolute top-5 right-0 bg-primary text-white text-sm px-2 py-1 rounded">
          Copy!
        </p>
      )}
    </div>
  );
};

export default ShareButton;
