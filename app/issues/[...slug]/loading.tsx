import DetailSkeleton from "@/components/Skeleton/DetailSkeleton";

const loading = () => {
  return (
    <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
      <DetailSkeleton />
    </section>
  );
};

export default loading;
