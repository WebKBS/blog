import SkeletonCard from '@/components/Skeleton/SkeletonCard';

const loading = () => {
  return (
    <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
      <SkeletonCard />
      <p>데이터 가져오는 중..</p>
    </section>
  );
};

export default loading;
