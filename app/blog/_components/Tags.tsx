import { posts } from '#site/content';
import Link from 'next/link';

const Tags = () => {
  const tags = posts.map((post) => post.tags).flat();
  const tagCount = tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <>
      {Object.entries(tagCount).map(([tag, count]) => (
        <li key={tag}>
          <Link href={`/blog/tag/${tag}`}>{tag}</Link> ({count})
        </li>
      ))}
    </>
  );
};

export default Tags;
