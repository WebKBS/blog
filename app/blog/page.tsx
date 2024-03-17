import Tags from './_components/tags';

export const metadata = {
  title: 'blog',
  description: '기술 블로그 홈',
};

const BlogPage = () => {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">기술 블로그</h2>
      <hr className="mt-4" />
      <div className="py-4">
        <h3>블로그 태그</h3>
        <ul>
          <Tags />
        </ul>
      </div>
    </section>
  );
};

export default BlogPage;
