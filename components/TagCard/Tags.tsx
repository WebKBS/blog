"use client";
import { badgeVariants } from "@/components/ui/badge";
import { useTagStore } from "@/store/tagStore";
import Link from "next/link";
import { notFound, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { TagsCardProps } from "@/components/TagCard/TagsCard";

const Tags = ({ tagData }: TagsCardProps) => {
  const { setTags } = useTagStore();

  const tags = tagData
    .map((data) => data.tags)
    .flat()
    .sort((a, b) => a.localeCompare(b));

  const tagCount = tags.reduce(
    (acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag");
  // console.log(currentTag);

  useEffect(() => {
    setTags(currentTag || "");
  }, [currentTag, setTags]);

  if (!searchParams) {
    return notFound();
  }

  return (
    <>
      <li>
        <Link
          className={badgeVariants({
            variant: currentTag === null ? "default" : "secondary",
          })}
          href={{ pathname, search: "" }}
          scroll={false}
          onClick={(event) => {
            if (currentTag === null) {
              event.preventDefault();
            }
          }}
        >
          All
        </Link>
      </li>
      {Object.entries(tagCount).map(([tag, count]) => (
        <li key={tag} className="notranslate">
          <Link
            className={badgeVariants({
              variant: currentTag === tag ? "default" : "secondary",
            })}
            href={{ pathname, search: `?tag=${tag}` }}
            scroll={false}
            onClick={(event) => {
              if (currentTag === tag) {
                event.preventDefault();
              }
            }}
          >
            {tag}{" "}
            <span className="rounded-md px-1 min-w-5 flex items-center justify-center border border-white ml-2">
              {count}
            </span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Tags;
