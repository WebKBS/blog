import { Issues, issues } from "#site/content";
import LinkCard from "@/components/LinkCard";
import { sortPosts } from "@/lib/utils";

import Link from "next/link";
import TagsCard from "@/components/TagCard/TagsCard";

export const metadata = {
  title: "ISSUE",
  description: "트러블 슈팅",
};

const IssuePage = ({ searchParams }: { searchParams: { tag?: string } }) => {
  let sortedIssues: Array<Issues>;

  if (process.env.NODE_ENV === "production") {
    sortedIssues = sortPosts(issues.filter((issue) => issue.published));
  } else {
    sortedIssues = sortPosts(issues);
  }

  if (sortedIssues.length === 0) {
    return (
      <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
        <h1 className="text-2xl font-semibold hover:underline">
          <Link href={"/issues"}>트러블 슈팅</Link>
        </h1>
        <p className={"text-lg mt-6"}>아직 작성된 글이 없습니다.</p>
      </section>
    );
  }

  const tagParam = searchParams.tag;
  const tagPage = sortedIssues.filter((issue) =>
    issue.tags.includes(tagParam || ""),
  );

  return (
    <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
      <h1 className="text-2xl font-semibold hover:underline">
        <Link href={"/issues"}>트러블 슈팅</Link>
      </h1>
      <TagsCard tagData={sortedIssues} />
      <ul className="flex flex-col gap-4">
        {tagPage.length > 0
          ? tagPage.map((issue) => <LinkCard key={issue.slug} {...issue} />)
          : sortedIssues.map((issue) => (
              <LinkCard key={issue.slug} {...issue} />
            ))}
      </ul>
    </section>
  );
};

export default IssuePage;
