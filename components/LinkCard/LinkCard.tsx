import { formatDate } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';

interface LinkCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  cover?: StaticImageData;
}

const LinkCard = ({
  title,
  description,
  date,
  tags,
  slug,
  cover,
}: LinkCardProps) => {
  return (
    <li>
      <Link
        href={`/${slug}`}
        className="border rounded-md flex flex-col overflow-hidden px-4 py-4 gap-4 sm:flex-row-reverse hover:border-primary transition-all duration-300 shadow-md"
      >
        <div className="w-full relative pt-[100%] overflow-hidden sm:pt-0 sm:w-44 sm:h-44">
          {cover ? (
            <Image
              src={cover}
              alt={title}
              fill
              objectFit="cover"
              className="w-full h-auto rounded-sm max-w-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          ) : null}
        </div>
        <div className="flex flex-col justify-between gap-4 sm:flex-1">
          <div>
            <h2 className="text-xl font-semibold line-clamp-2 mb-2 md:mb-4">
              {title}
            </h2>
            <p className="line-clamp-2 md:line-clamp-3 text-sm">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <ul className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
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
