import { cn } from "@/lib/utils";
import InnerWidth from "@/components/DeviceView/InnerWidth";
import InnerHeight from "@/components/DeviceView/InnerHeight";

const DeviceSize = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      <InnerWidth />
      <span>x</span>
      <InnerHeight />
    </div>
  );
};
export default DeviceSize;
