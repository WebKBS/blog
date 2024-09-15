"use client";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { sendGAEvent } from "@next/third-parties/google";
import { ArrowUpRight } from "lucide-react";

const SeeMoreLink = () => {
  return (
    <Link
      href={"/blog"}
      className={buttonVariants({ variant: "secondary" })}
      onClick={() => {
        sendGAEvent("blog", "click", "더 많은 내용 보러가기");
      }}
    >
      더 많은 내용 보러가기 <ArrowUpRight className="ml-1" size={20} />
    </Link>
  );
};

export default SeeMoreLink;
