'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import Tags from './Tags';
import styles from './TagsCard.module.css';

const TagsCard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={'pt-4 mb-6 relative'}>
      <Button
        variant={'outline'}
        size="icon"
        className="absolute top-[-32px] right-0"
        onClick={handleOpen}
      >
        <ChevronsUpDown size={20} />
      </Button>
      <div
        className={cn(
          'overflow-hidden relative pb-2',
          styles.gradient,
          open
            ? cn('max-h-screen', styles.active)
            : cn('max-h-[106px]', styles.inactive)
        )}
      >
        <ul className={'flex flex-wrap gap-2'}>
          <Tags />
        </ul>
      </div>
    </div>
  );
};

export default TagsCard;
