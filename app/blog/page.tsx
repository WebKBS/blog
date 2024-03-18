import { posts } from '#site/content';
import LinkCard from '@/components/LinkCard';
import Tags from './_components/Tags';

export const metadata = {
  title: 'blog',
  description: '기술 블로그 홈',
};

const BlogPage = ({ searchParams }: { searchParams: { tag?: string } }) => {
  const tagParam = searchParams.tag;
  const tagPage = posts.filter((post) =>
    post.tags.includes(tagParam?.toLocaleLowerCase() || '')
  );

  return (
    <section className="py-12 max-w-screen-lg px-6 mx-auto">
      <h2 className="text-2xl font-semibold">기술 블로그</h2>
      <div className="py-4 mb-4">
        <ul className="flex flex-wrap gap-4">
          <Tags />
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          {tagPage.length > 0
            ? tagPage.map((post) => <LinkCard key={post.slug} {...post} />)
            : posts.map((post) => <LinkCard key={post.slug} {...post} />)}
        </ul>
      </div>
    </section>
  );
};

export default BlogPage;
