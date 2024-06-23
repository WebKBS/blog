import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const sortedPosts = sortPosts(posts);

  const post: MetadataRoute.Sitemap = sortedPosts.map((post, index) => ({
    url: `https://recodelog.com/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
    changeFrequency: index === 0 ? "daily" : "weekly",
    priority: index === 0 ? 0.9 : 0.7,
  }));

  return [
    {
      url: "https://recodelog.com", // 사용자가 접근할 수 있는 URL
      lastModified: new Date().toISOString().split("T")[0], // 마지막으로 수정된 날짜
      changeFrequency: "weekly", // 변경 빈도
      priority: 1,
    },
    {
      url: "https://recodelog.com/blog",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://recodelog.com/device",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...post,
  ];
}
