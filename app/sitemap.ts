import { posts } from '#site/content';
import { MetadataRoute } from 'next';

export const generateSitemaps = async () => {
  return posts.map((post) => ({
    url: `https://recodelog.com/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
  }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const post = await generateSitemaps();

  return [
    {
      url: 'https://recodelog.com', // 사용자가 접근할 수 있는 URL
      lastModified: new Date(), // 마지막으로 수정된 날짜
      changeFrequency: 'weekly', // 변경 빈도
      priority: 1, // 우선순위
    },
    {
      url: 'https://recodelog.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...post,
  ];
}
