'use client';
import { posts } from '#site/content';
import { badgeVariants } from '@/components/ui/badge';
import { useTagStore } from '@/store/tagStore';
import Link from 'next/link';
import { notFound, usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const Tags = () => {
  const { setTags } = useTagStore();

  const tags = posts.map((post) => post.tags).flat();
  const tagCount = tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get('tag');
  // console.log(currentTag);

  useEffect(() => {
    setTags(currentTag || '');
  }, [currentTag, setTags]);

  if (!searchParams) {
    return notFound();
  }

  return (
    <>
      <li>
        <Link
          className={badgeVariants({
            variant: currentTag === null ? 'default' : 'secondary',
          })}
          href={{ pathname, search: '' }}
          scroll={false}
        >
          All
        </Link>
      </li>
      {Object.entries(tagCount).map(([tag, count]) => (
        <li key={tag}>
          <Link
            className={badgeVariants({
              variant: currentTag === tag ? 'default' : 'secondary',
            })}
            href={{ pathname, search: `?tag=${tag}` }}
            scroll={false}
            onClick={(event) => {
              if (currentTag === tag) {
                event.preventDefault();
              }
            }}
          >
            {tag}{' '}
            <span className="rounded-md w-4 h-4 flex items-center justify-center border border-white ml-2">
              {count}
            </span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Tags;
