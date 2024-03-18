import { posts } from '#site/content';
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
// export const generateStaticParams = () => {}

const BlogDetail = ({ params: { slug } }: BlogDetailProps) => {
  const post = getPost({ slug });
  console.log(slug);

  if (!post || !post.published) {
    return notFound();
  }

  return (
    <section className="py-12 max-w-screen-lg px-6 mx-auto">
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </section>
  );
};

export default BlogDetail;
