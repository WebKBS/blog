import { Skeleton } from '../ui/skeleton';

const SkeletonCard = () => {
  return (
    <div className="flex gap-4 items-center flex-col-reverse sm:flex-row sm:justify-between space-y-3 mb-4">
      <div className="space-y-3">
        <Skeleton className="h-4 w-[250px] sm:w-[400px]" />
        <Skeleton className="h-4 w-[200px] sm:w-[350px]" />
      </div>
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    </div>
  );
};

export default SkeletonCard;
