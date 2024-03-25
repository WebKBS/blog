import { posts } from '#site/content';
import LinkCard from '@/components/LinkCard';
import { sortPosts } from '@/lib/utils';
import Tags from './_components/Tags';

export const metadata = {
  title: 'BLOG',
  description: '기술 블로그',
};

const BlogPage = ({ searchParams }: { searchParams: { tag?: string } }) => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const tagParam = searchParams.tag;
  const tagPage = sortedPosts.filter((post) =>
    post.tags.includes(tagParam || '')
  );

  // console.log(posts.length);

  return (
    <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
      <h1 className="text-2xl font-semibold">기술 블로그</h1>
      <div className="py-4 mb-4">
        <ul className="flex flex-wrap gap-2">
          <Tags />
        </ul>
      </div>
      <ul className="flex flex-col gap-4">
        {tagPage.length > 0
          ? tagPage.map((post) => <LinkCard key={post.slug} {...post} />)
          : sortedPosts.map((post) => <LinkCard key={post.slug} {...post} />)}
      </ul>
    </section>
  );
};

export default BlogPage;
