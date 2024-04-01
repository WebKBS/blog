import { formatDate } from '@/lib/utils';
import Logo from '@/public/icon.svg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import TagBadge from '../TagsBadge';

interface LinkCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  thumbnail?: StaticImageData | null;
}

const LinkCard = ({
  title,
  description,
  date,
  tags,
  slug,
  thumbnail,
}: LinkCardProps) => {
  return (
    <li>
      <Link
        href={`/${slug}`}
        className="border rounded-md flex flex-col overflow-hidden px-4 py-4 gap-4 sm:flex-row-reverse hover:border-primary transition-all duration-300 shadow-md"
      >
        <div className="w-full relative pt-[50%] overflow-hidden sm:pt-0 sm:w-44 sm:h-44 dark:bg-white rounded-md border shadow-sm">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="w-[80%!important] mx-auto h-auto rounded-sm max-w-xl hover:scale-105 transition-transform duration-300 ease-in-out object-contain"
              priority
            />
          ) : (
            <Image
              src={Logo}
              alt="recodelog"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="w-[46%!important] mx-auto h-auto rounded-sm max-w-xl hover:scale-105 transition-transform duration-300 ease-in-out object-contain"
              priority
            />
          )}
        </div>
        <div className="flex flex-col justify-between gap-4 sm:flex-1">
          <div>
            <h2 className="text-xl font-semibold line-clamp-2 mb-2 md:mb-4">
              {title}
            </h2>
            <h3 className="line-clamp-2 md:line-clamp-3 text-sm text-zinc-400">
              {description}
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <ul className="flex flex-wrap gap-1">
              <TagBadge tags={tags} />
            </ul>
            <time className="self-end text-sm sm:self-start" dateTime={date}>
              {formatDate(date)}
            </time>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default LinkCard;
