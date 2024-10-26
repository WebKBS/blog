import { posts } from "#site/content";
import ScrollProgress from "@/components/ScrollProgress";
import ShareButton from "@/components/ShareButton";
import { MDXContent } from "@/components/mdx-content";
import { Badge } from "@/components/ui/badge";

import { defaultData } from "@/config/defaultData";
import { formatDate, sortPosts } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Crumb from "../../../components/Crumb/Crumb";
import ScrollUpButton from "@/components/Buttons/ScrollUpButton";
import { WithContext, BlogPosting } from "schema-dts";
import Utterances from "@/components/Utterances/Utterances";
import PrevNextNavigation from "@/components/Navigation/PrevNextNavigation";

interface BlogDetailProps {
  params: {
    slug: string[] | undefined;
  };
}

const getPost = (params: BlogDetailProps["params"]) => {
  const slug = params?.slug?.join("/");

  return posts.find((post) => post.permalink === slug);
};

export function generateMetadata({ params }: BlogDetailProps): Metadata {
  const post = getPost(params);

  if (!post || !post.published) {
    return {
      title: "404 Not Found",
      description: "페이지를 찾을 수 없습니다.",
    };
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);
  ogSearchParams.set("description", post.description);

  return {
    title: post.title,
    description: post.description,
    authors: { name: defaultData.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: {
        url: `/api/og?${ogSearchParams.toString()}`,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
    alternates: {
      canonical: post.slug,
    },
  };
}

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 빌드 시점에 정적으로 생성할 페이지의 경로를 반환.
export const generateStaticParams = () => {
  // posts 배열에서 published가 true인 것만 필터링하여 slug만 반환

  return posts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.permalink.split("/"),
    }));
};

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params#catch-all-dynamic-segment
// 포괄적 동적 세그먼트를 사용하는 페이지를 생성할 때 사용 generateStaticParams와 함께 사용

const BlogDetail = ({ params: { slug } }: BlogDetailProps) => {
  const post = getPost({ slug });

  if (!post) {
    return notFound();
  }

  if (process.env.NODE_ENV === "production" && !post.published) {
    return notFound();
  }

  const filteredPosts = sortPosts(posts.filter((post) => post.published));

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: new Date(post.date).toISOString().split("T")[0],
    dateModified: new Date(post.date).toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: "WebKBS",
    },
    publisher: {
      "@type": "Organization",
      name: "Recode Log",
      logo: {
        "@type": "ImageObject",
        url: "https://recodelog.com/logo.png",
      },
    },
    description: post.description,
    url: `https://recodelog.com/blog/${slug}`,
  };

  return (
    <>
      <ScrollUpButton />
      <Crumb title={post.title} />
      <section className="pb-24 pt-4 max-w-screen-lg px-6 mx-auto prose dark:prose-invert select-none">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <h1 className="text-3xl mb-2">{post.title}</h1>
        <p>{post.description}</p>
        <div className="flex gap-4 justify-between items-center">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <ShareButton />
        </div>
        <hr className="my-6" />
        <MDXContent code={post.body} />
        <hr className="my-6" />
        <PrevNextNavigation filteredPosts={filteredPosts} post={post} />
        <hr className="my-6" />
        <div>
          <p>관련 태그</p>
          <ul className="list-none flex p-0 flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag} className="p-0 m-0">
                <Link href={`/blog?tag=${tag}`}>
                  <Badge variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Utterances />
      </section>
    </>
  );
};

export default BlogDetail;
