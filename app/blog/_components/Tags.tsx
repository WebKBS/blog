'use client';
import { posts } from '#site/content';
import Link from 'next/link';
import { notFound, usePathname, useSearchParams } from 'next/navigation';

const Tags = () => {
  const tags = posts.map((post) => post.tags).flat();
  const tagCount = tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get('tag');
  console.log(currentTag);

  if (!searchParams) {
    return notFound();
  }

  return (
    <>
      <li>
        <Link href={{ pathname, search: '' }} scroll={false}>
          All
        </Link>
      </li>
      {Object.entries(tagCount).map(([tag, count]) => (
        <li key={tag}>
          <Link href={{ pathname, search: `?tag=${tag}` }} scroll={false}>
            {tag} ({count})
          </Link>
        </li>
      ))}
    </>
  );
};

export default Tags;
