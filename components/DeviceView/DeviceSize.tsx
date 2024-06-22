import { cn } from "@/lib/utils";
import Width from "@/components/DeviceView/Width";
import Height from "@/components/DeviceView/Height";

const DeviceSize = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      <Width />
      <span>x</span>
      <Height />
    </div>
  );
};
export default DeviceSize;
