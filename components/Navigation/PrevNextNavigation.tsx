import React from "react";
import Link from "next/link";
import { Post } from "@/.velite";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PrevNextNavigation = ({
  filteredPosts,
  post,
}: {
  filteredPosts: Post[];
  post: Post;
}) => {
  const currentPostIndex = filteredPosts.findIndex((p) => p.slug === post.slug);

  const previousPost =
    currentPostIndex > 0 ? filteredPosts[currentPostIndex - 1] : null;
  const nextPost =
    currentPostIndex < filteredPosts.length - 1
      ? filteredPosts[currentPostIndex + 1]
      : null;

  return (
    <div className="flex gap-6 flex-col md:flex-row flex-wrap">
      {/* Previous Post */}
      {previousPost && (
        <Link href={`/${previousPost.slug}`} className="flex-1" scroll={true}>
          <div className="relative block rounded-lg border border-gray-500 p-4">
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-semibold">이전글</span>
            </div>
            <div className="mt-8">
              <p className="text-sm sm:text-base font-medium mb-0 line-clamp-1">
                {previousPost.title || previousPost.description}
              </p>
            </div>
          </div>
        </Link>
      )}

      {/* Next Post */}
      {nextPost && (
        <Link href={`/${nextPost.slug}`} className="flex-1" scroll={true}>
          <div className="relative block rounded-lg border border-gray-500 p-4">
            <div className="absolute right-4 top-4 flex items-center gap-2">
              <span className="text-sm font-semibold">다음글</span>
              <ChevronRight className="w-5 h-5 group-hover:text-blue-500 transition" />
            </div>
            <div className="mt-8">
              <p className="text-sm sm:text-base font-medium text-right mb-0 line-clamp-1">
                {nextPost.title || nextPost.description}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PrevNextNavigation;
