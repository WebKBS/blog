"use client";
import React from "react";
import LinkCard from "@/components/LinkCard";
import { usePathname, useSearchParams } from "next/navigation";
import { POST_COUNT } from "@/constants/pageCount";
import Paginations from "@/components/Pagination/Paginations";

const PageItem = ({ sortedPosts }: { sortedPosts: any[] }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get("page")) || 1;
  const tagParam = searchParams.get("tag");

  const tagPage = sortedPosts.filter((post) =>
    post.tags.includes(tagParam || ""),
  );

  const displayTagData = tagPage.slice(
    (currentPage - 1) * POST_COUNT,
    currentPage * POST_COUNT,
  );

  const displayData = sortedPosts.slice(
    (currentPage - 1) * POST_COUNT,
    currentPage * POST_COUNT,
  );

  return (
    <>
      <ul className="flex flex-col gap-4">
        {displayTagData.length > 0
          ? displayTagData.map((post) => <LinkCard key={post.slug} {...post} />)
          : displayData.map((post) => <LinkCard key={post.slug} {...post} />)}
      </ul>
      <div className="mt-6">
        {displayTagData.length > 0 ? (
          <Paginations
            totalPage={Math.ceil(tagPage.length / POST_COUNT)}
            searchParams={searchParams}
            pathname={pathname}
          />
        ) : (
          <Paginations
            totalPage={Math.ceil(sortedPosts.length / POST_COUNT)}
            searchParams={searchParams}
            pathname={pathname}
          />
        )}
      </div>
    </>
  );
};

export default PageItem;
