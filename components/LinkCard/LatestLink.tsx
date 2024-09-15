"use client";

import React from "react";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import { ExternalLink } from "lucide-react";

const LatestLink = () => {
  return (
    <Link
      href={"/blog"}
      className="flex items-center gap-2 hover:underline"
      onClick={() => {
        sendGAEvent("blog", "click", "최신 블로그 이동");
      }}
    >
      최신 블로그
      <ExternalLink />
    </Link>
  );
};

export default LatestLink;
