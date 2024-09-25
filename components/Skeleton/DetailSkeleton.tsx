import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

const DetailSkeleton = () => {
  return (
    <div className="space-y-3 mb-6">
      <div className="space-y-3 w-full">
        <Skeleton className="h-8 w-[100%] sm:w-[440px]" />
        <Skeleton className="h-6 w-[80%] sm:w-[320px]" />
        <Skeleton className="h-6 w-[80%] sm:w-[320px]" />
      </div>
      <Skeleton className="h-[420px] w-[100%] rounded-xl" />
    </div>
  );
};

export default DetailSkeleton;
