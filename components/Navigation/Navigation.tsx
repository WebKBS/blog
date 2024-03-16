'use client';

import { navigationData } from '@/config/defaultData';
import { cn } from '@/lib/utils';
import { useMenuToggle } from '@/store/common';
import Link from 'next/link';

const Navigation = ({ className }: { className: string }) => {
  const { setToggleMenu } = useMenuToggle();

  const clickHandler = () => {
    setToggleMenu(false);
  };

  return (
    <ul className={cn(className, 'uppercase')}>
      {navigationData.map((item, index) => (
        <li key={index}>
          <Link href={item.href} onClick={clickHandler}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
