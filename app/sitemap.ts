import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];
}
