import { issues, posts } from "#site/content";
import LinkCard from "@/components/LinkCard";
import { blogStackData } from "@/config/defaultData";
import { sortPosts } from "@/lib/utils";
import Link from "next/link";
import LatestLink from "@/components/LinkCard/LatestLink";
import SeeMoreLink from "@/components/LinkCard/SeeMoreLink";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Recode Log",
    url: "https://recodelog.com",
    description: "기술 개발 블로그 및 이슈에 대한 기록을 남기는 공간입니다.",
    publisher: {
      "@type": "WebKBS",
      name: "Recode Log",
      url: "https://recodelog.com",
      logo: {
        "@type": "ImageObject",
        url: "https://recodelog.com/logo.png",
      },
    },
    author: {
      "@type": "Person",
      name: "Recode Log",
    },
    datePublished: "2024-03-10",
    dateModified: new Date().toISOString().split("T")[0],
  };

  const allPosts = [...posts, ...issues];
  const sortedPosts = sortPosts(allPosts.filter((post) => post.published));
  const latestData = sortedPosts.splice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
        <h1 className="relative text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase mb-12 md:mb-32 md:mt-10 recodelog notranslate">
          Recode Log
        </h1>
        <div>
          <h2 className="text-2xl mb-4 font-bold">
            <LatestLink />
          </h2>
          <ul className="flex flex-col gap-4">
            {latestData.map((post) => (
              <LinkCard key={post.slug} {...post} />
            ))}
          </ul>
        </div>
        <div className="py-20">
          <SeeMoreLink />
        </div>
        <h3 className="font-bold text-2xl mb-2">BLOG STACK</h3>
        <div className="mb-12">
          <ul className="uppercase flex items-center gap-x-4 gap-y-2 flex-wrap">
            {blogStackData.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="hover:text-primary hover:underline text-green-500 transition-colors font-semibold"
                  target="_blank"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
