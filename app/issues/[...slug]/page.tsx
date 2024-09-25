import { issues } from "#site/content";
import ScrollProgress from "@/components/ScrollProgress";
import ShareButton from "@/components/ShareButton";
import { MDXContent } from "@/components/mdx-content";
import { Badge } from "@/components/ui/badge";

import { defaultData } from "@/config/defaultData";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Crumb from "../../../components/Crumb/Crumb";
import ScrollUpButton from "@/components/Buttons/ScrollUpButton";
import { WithContext, BlogPosting } from "schema-dts";
import Utterances from "@/components/Utterances/Utterances";

interface IssueDetailProps {
  params: {
    slug: string[] | undefined;
  };
}

const getPost = async (params: IssueDetailProps["params"]) => {
  const slug = params?.slug?.join("/");

  return issues.find((issue) => issue.permalink === slug);
};

export async function generateMetadata({
  params,
}: IssueDetailProps): Promise<Metadata> {
  const issue = await getPost(params);

  if (!issue || !issue.published) {
    return {
      title: "404 Not Found",
      description: "페이지를 찾을 수 없습니다.",
    };
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", issue.title);
  ogSearchParams.set("description", issue.description);

  return {
    title: issue.title,
    description: issue.description,
    authors: { name: defaultData.author },
    openGraph: {
      title: issue.title,
      description: issue.description,
      type: "article",
      url: issue.slug,
      images: {
        url: `/api/og?${ogSearchParams.toString()}`,
        width: 1200,
        height: 630,
        alt: issue.title,
      },
    },
    twitter: {
      title: issue.title,
      description: issue.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
    alternates: {
      canonical: issue.slug,
    },
  };
}

export const generateStaticParams = async () => {
  return issues
    .filter((issue) => issue.published)
    .map((issue) => ({
      slug: issue.permalink.split("/"),
    }));
};

const IssueDetail = async ({ params: { slug } }: IssueDetailProps) => {
  const issue = await getPost({ slug });

  if (!issue || !issue.published) {
    return notFound();
  }

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: issue.title,
    datePublished: new Date(issue.date).toISOString().split("T")[0],
    dateModified: new Date(issue.date).toISOString().split("T")[0],
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
    description: issue.description,
    url: `https://recodelog.com/issues/${slug}`,
  };

  return (
    <>
      <ScrollUpButton />
      <Crumb title={issue.title} />
      <section className="pb-24 pt-4 max-w-screen-lg px-6 mx-auto prose dark:prose-invert select-none">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <h1 className="text-3xl mb-2">{issue.title}</h1>
        <p>{issue.description}</p>
        <div className="flex gap-4 justify-between items-center">
          <time dateTime={issue.date}>{formatDate(issue.date)}</time>
          <ShareButton />
        </div>
        <hr className="my-6" />
        <MDXContent code={issue.body} />
        <hr />
        <div>
          <p>관련 태그</p>
          <ul className="list-none flex p-0 flex-wrap gap-2">
            {issue.tags.map((tag) => (
              <li key={tag} className="p-0 m-0">
                <Link href={`/issues?tag=${tag}`}>
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

export default IssueDetail;
