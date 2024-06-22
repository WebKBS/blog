import React from "react";
import DeviceView from "@/components/DeviceView";

const DevicePage = () => {
  return (
    <>
      <DeviceView />

      <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
        <h1 className="text-2xl font-semibold">브라우저 해상도</h1>
        <p className="mt-4 text-lg text-zinc-500">
          브라우저 해상도를 확인해보세요.
        </p>
      </section>
    </>
  );
};

export default DevicePage;
