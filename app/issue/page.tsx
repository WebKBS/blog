import { issues } from "#site/content";
import LinkCard from "@/components/LinkCard";
import { sortPosts } from "@/lib/utils";

import Link from "next/link";
import TagsCard from "@/app/blog/_components/TagsCard";

export const metadata = {
  title: "BLOG",
  description: "기술 블로그",
};

const IssuePage = ({ searchParams }: { searchParams: { tag?: string } }) => {
  const sortedPosts = sortPosts(issues.filter((issue) => issue.published));

  const tagParam = searchParams.tag;
  const tagPage = sortedPosts.filter((post) =>
    post.tags.includes(tagParam || ""),
  );

  // console.log(posts.length);

  return (
    <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
      <h1 className="text-2xl font-semibold hover:underline">
        <Link href={"/blog"}>기술 블로그</Link>
      </h1>
      <TagsCard />
      <ul className="flex flex-col gap-4">
        {tagPage.length > 0
          ? tagPage.map((post) => <LinkCard key={post.slug} {...post} />)
          : sortedPosts.map((post) => <LinkCard key={post.slug} {...post} />)}
      </ul>
    </section>
  );
};

export default IssuePage;
