import React from "react";
import DeviceView from "@/components/DeviceView";
import InnerWidth from "@/components/DeviceView/InnerWidth";
import InnerHeight from "@/components/DeviceView/InnerHeight";
import OuterWidth from "@/components/DeviceView/OuterWidth";
import OuterHeight from "@/components/DeviceView/OuterHeight";

export const metadata = {
  title: "DEVICE SIZE CHECK",
  description: "현재 브라우저의 크기 확인. Viewport, Window 크기 확인",
};

const DevicePage = () => {
  return (
    <>
      <DeviceView />
      <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
        <h1 className="text-2xl font-semibold">브라우저 크기 확인</h1>
        <p className="mt-4 text-lg text-zinc-500 mb-6">
          현재 브라우저의 크기입니다.
        </p>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-md text-white">
            <h2 className="text-xl font-bold mb-4">브라우저 뷰포트 크기</h2>
            <p className="mb-4">
              브라우저 뷰포트 크기는 웹 페이지가 표시되는 영역의 크기를
              의미합니다. 여기에는 주소 표시줄, 즐겨찾기 바, 개발자 도구 등이
              포함되지 않습니다.
            </p>
            <div className="flex items-center space-x-2">
              <p className="flex-shrink-0">브라우저 뷰포트 width:</p>
              <InnerWidth />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p className="flex-shrink-0">브라우저 뷰포트 height:</p>
              <InnerHeight />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-md text-white">
            <h2 className="text-xl font-bold mb-4">브라우저 전체 창의 크기</h2>
            <p className="mb-4">
              브라우저 전체 창의 크기는 브라우저의 전체 크기를 의미합니다.
              여기에는 브라우저의 경계선, 스크롤바, 주소 표시줄 등이 포함됩니다.
            </p>
            <div className="flex items-center space-x-2">
              <p className="flex-shrink-0">브라우저 전체 창 width:</p>
              <OuterWidth />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p className="flex-shrink-0">브라우저 전체 창 height:</p>
              <OuterHeight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevicePage;
