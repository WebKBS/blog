"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import Tags from "./Tags";
import styles from "./TagsCard.module.css";
import useThemeMode from "@/hooks/useThemeMode";
import { useState } from "react";

export interface TagsCardProps {
  tagData: { tags: string[] }[];
}

const TagsCard = ({ tagData }: TagsCardProps) => {
  const [open, setOpen] = useState(false);
  const isLightTheme = useThemeMode(); // 커스텀 훅 사용

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={"pt-4 mb-6 relative"}>
      <Button
        variant={"outline"}
        size="icon"
        className="absolute top-[-32px] right-0"
        onClick={handleOpen}
        aria-label={"태그 목록 열기/닫기"}
      >
        <ChevronsUpDown size={20} />
      </Button>
      <div
        className={cn(
          "overflow-hidden relative pb-2",
          isLightTheme ? styles.gradientWhite : styles.gradient,
          open
            ? cn("max-h-screen", styles.active)
            : cn("max-h-[106px]", styles.inactive),
        )}
      >
        <ul className={"flex flex-wrap gap-2"}>
          <Tags tagData={tagData} />
        </ul>
      </div>
    </div>
  );
};

export default TagsCard;
