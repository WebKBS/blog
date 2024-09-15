"use client";

import { navigationData } from "@/config/defaultData";
import { cn } from "@/lib/utils";
import { useMenuToggle } from "@/store/common";
import { useTagStore } from "@/store/tagStore";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

const Navigation = ({ className }: { className: string }) => {
  const setToggleMenu = useMenuToggle((state) => state.setToggleMenu);
  const setTags = useTagStore((state) => state.setTags);

  const clickHandler = (title: string) => {
    sendGAEvent("Navigation", "click", title);
    setToggleMenu(false);
    setTags("");
  };

  return (
    <ul className={cn(className, "uppercase")}>
      {navigationData.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            onClick={() => clickHandler(item.name)}
            scroll={false}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
