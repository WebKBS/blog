"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-10">
      <h2>에러가 발생했습니다. 새로고침을 해보세요.</h2>
      <p className="text-red-500 py-2">{error.message}</p>
      <button
        onClick={() => reset()}
        className="p-2 mt-2 bg-blue-500 text-white rounded-md"
      >
        Try again
      </button>
    </div>
  );
}
