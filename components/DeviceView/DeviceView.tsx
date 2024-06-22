import React from "react";
import DeviceSize from "@/components/DeviceView/DeviceSize";

const DeviceView = () => {
  return (
    <aside className="sticky top-[56px] left-0 z-10 bg-background">
      <div className="bg-primary/30 py-1 px-6">
        <DeviceSize />
      </div>
    </aside>
  );
};

export default DeviceView;
