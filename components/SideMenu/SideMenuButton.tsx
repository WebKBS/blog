'use client';

import { useMenuToggle } from '@/store/common';

import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const SideMenuButton = ({ className }: { className: string }) => {
  const { menuOpen, setToggleMenu } = useMenuToggle();

  return (
    <Button
      size="sm"
      variant="ghost"
      className={cn(className, 'px-2')}
      onClick={() => setToggleMenu(!menuOpen)}
      title="메뉴열기"
      aria-label="메뉴열기"
    >
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </Button>
  );
};

export default SideMenuButton;
