import { posts } from '#site/content';
import ScrollProgress from '@/components/ScrollProgress';
import { MDXContent } from '@/components/mdx-content';
import { formatDate } from '@/lib/utils';
import '@/styles/mdx.css';
import { notFound } from 'next/navigation';

interface BlogDetailProps {
  params: {
    slug: string[];
  };
}

const getPost = (params: BlogDetailProps['params']) => {
  const slug = params?.slug?.join('/');
  const post = posts.find((post) => post.permalink === '/blog/' + slug);

  // console.log('내부: ', post);

  return post;
};

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 빌드 시점에 정적으로 생성할 페이지의 경로를 반환.
export const generateStaticParams = async (): Promise<
  BlogDetailProps['params'][]
> => {
  // posts 배열에서 published가 true인 것만 필터링하여 slug만 반환
  return posts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.permalink.split('/').slice(2),
    }));
};

const BlogDetail = ({ params: { slug } }: BlogDetailProps) => {
  const post = getPost({ slug });

  if (!post || !post.published) {
    return notFound();
  }

  return (
    <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto prose dark:prose-invert">
      <ScrollProgress />
      <h2 className="text-3xl mb-2">{post.title}</h2>
      <p>{post.description}</p>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <hr className="my-6" />
      <MDXContent code={post.body} />
    </section>
  );
};

export default BlogDetail;
