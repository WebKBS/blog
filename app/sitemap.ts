import { posts } from '#site/content';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const post: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://recodelog.com/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
    changeFrequency: 'daily',
  }));

  return [
    {
      url: 'https://recodelog.com', // 사용자가 접근할 수 있는 URL
      lastModified: new Date().toISOString().split('T')[0], // 마지막으로 수정된 날짜
      changeFrequency: 'daily', // 변경 빈도
    },
    {
      url: 'https://recodelog.com/blog',
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'daily',
    },
    ...post,
  ];
}
