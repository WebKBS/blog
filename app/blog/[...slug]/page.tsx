import { posts } from '#site/content';
import ScrollProgress from '@/components/ScrollProgress';
import ShareButton from '@/components/ShareButton';
import { MDXContent } from '@/components/mdx-content';
import { defaultData } from '@/config/defaultData';
import { formatDate } from '@/lib/utils';
import '@/styles/mdx.css';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogDetailProps {
  params: {
    slug: string[];
  };
}

const getPost = async (params: BlogDetailProps['params']) => {
  const slug = params?.slug?.join('/');
  console.log('slug: ', slug);
  const post = posts.find((post) => post.permalink === slug);

  console.log('내부: ', post);

  return post;
};

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const post = await getPost(params);

  if (!post || !post.published) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', post.title);
  ogSearchParams.set('description', post.description);

  return {
    title: post.title,
    description: post.description,
    authors: { name: defaultData.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: post.slug,
      images: {
        url: `/api/og?${ogSearchParams.toString()}`,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

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

const BlogDetail = async ({ params: { slug } }: BlogDetailProps) => {
  const post = await getPost({ slug });

  if (!post || !post.published) {
    return notFound();
  }

  return (
    <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto prose dark:prose-invert">
      <ScrollProgress />
      <h1 className="text-3xl mb-2">{post.title}</h1>
      <p>{post.description}</p>
      <div className="flex gap-4 justify-between items-center">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <ShareButton />
      </div>
      <hr className="my-6" />
      <MDXContent code={post.body} />
    </section>
  );
};

export default BlogDetail;
