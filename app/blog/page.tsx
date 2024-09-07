import { posts } from "#site/content";
import LinkCard from "@/components/LinkCard";
import { sortPosts } from "@/lib/utils";
import TagsCard from "../../components/TagCard/TagsCard";
import Link from "next/link";

export const metadata = {
  title: "BLOG",
  description: "기술 블로그",
};

const BlogPage = ({ searchParams }: { searchParams: { tag?: string } }) => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  if (sortedPosts.length === 0) {
    return (
      <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
        <h1 className="text-2xl font-semibold hover:underline">
          <Link href={"/blog"}>기술 블로그</Link>
        </h1>
        <p className={"text-lg mt-6"}>아직 작성된 글이 없습니다.</p>
      </section>
    );
  }

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
      <TagsCard tagData={sortedPosts} />
      <ul className="flex flex-col gap-4">
        {tagPage.length > 0
          ? tagPage.map((post) => <LinkCard key={post.slug} {...post} />)
          : sortedPosts.map((post) => <LinkCard key={post.slug} {...post} />)}
      </ul>
    </section>
  );
};

export default BlogPage;
