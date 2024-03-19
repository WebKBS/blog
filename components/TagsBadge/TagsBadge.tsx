'use client';

import { useTagStore } from '@/store/tagStore';
import { useEffect, useState } from 'react';
import { Badge } from '../ui/badge';

interface TagBadgeProps {
  tags: string[];
}

const TagBadge = ({ tags }: TagBadgeProps) => {
  const tagState = useTagStore((state) => state.tagState);
  const [tagStyle, setTagStyle] = useState('');

  useEffect(() => {
    if (tags.includes(tagState)) {
      setTagStyle(tagState);
    } else {
      setTagStyle('default');
    }
  }, [tagState, tags]);

  return (
    <>
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant={tag === tagStyle ? 'default' : 'secondary'}>
            {tag}
          </Badge>
          {/* <TagBadge tag={tag} /> */}
          {/* <TagBadge tag={tag} /> */}
        </li>
      ))}
    </>
  );
};

export default TagBadge;
