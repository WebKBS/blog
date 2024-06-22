"use client";

import { navigationData } from "@/config/defaultData";
import { cn } from "@/lib/utils";
import { useMenuToggle } from "@/store/common";
import { useTagStore } from "@/store/tagStore";
import Link from "next/link";

const Navigation = ({ className }: { className: string }) => {
  const setToggleMenu = useMenuToggle((state) => state.setToggleMenu);
  const setTags = useTagStore((state) => state.setTags);

  const clickHandler = () => {
    setToggleMenu(false);
    setTags("");
  };

  return (
    <ul className={cn(className, "uppercase")}>
      {navigationData.map((item, index) => (
        <li key={index}>
          <Link href={item.href} onClick={clickHandler} scroll={false}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
