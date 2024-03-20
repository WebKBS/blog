'use client';

import { useTagStore } from '@/store/tagStore';
import { useEffect, useMemo, useState } from 'react';
import { Badge } from '../ui/badge';

interface TagBadgeProps {
  tags: string[];
}

const TagBadge = ({ tags }: TagBadgeProps) => {
  const tagState = useTagStore((state) => state.tagState);
  const [tagStyle, setTagStyle] = useState('');

  const memoizedTags = useMemo(() => tags, [tags]);

  useEffect(() => {
    if (memoizedTags.includes(tagState)) {
      setTagStyle(tagState);
    } else {
      setTagStyle('default');
    }
  }, [tagState, memoizedTags]);

  return (
    <>
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant={tag === tagStyle ? 'default' : 'secondary'}>
            {tag}
          </Badge>
        </li>
      ))}
    </>
  );
};

export default TagBadge;
