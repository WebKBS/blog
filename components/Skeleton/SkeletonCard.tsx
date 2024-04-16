import { Skeleton } from '../ui/skeleton';

const SkeletonCard = () => {
  return (
    <div className="flex gap-4 items-center flex-col-reverse sm:flex-row sm:justify-between space-y-3 mb-6">
      <div className="space-y-3 w-full">
        <Skeleton className="h-4 w-[100%] sm:w-[400px]" />
        <Skeleton className="h-4 w-[80%] sm:w-[350px]" />
        <Skeleton className="h-4 w-[80%] sm:w-[350px]" />
      </div>
      <Skeleton className="h-[125px] w-[100%] sm:w-[260px] rounded-xl" />
    </div>
  );
};

export default SkeletonCard;
