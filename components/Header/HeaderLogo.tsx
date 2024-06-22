"use client";

import { useTagStore } from "@/store/tagStore";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  const setTags = useTagStore((state) => state.setTags);

  return (
    <p className="text-xl font-bold uppercase ">
      <Link
        href="/"
        className="flex items-center gap-2"
        // style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
        onClick={() => setTags("")}
      >
        <Image src="/logo.png" alt="" width={32} height={32} />
        Recode Log
      </Link>
    </p>
  );
};

export default HeaderLogo;
