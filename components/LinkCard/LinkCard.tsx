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
        className="border rounded-md flex flex-col overflow-hidden px-4 py-4 gap-4 sm:flex-row"
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
        <div className="sm:flex-1 flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="line-clamp-1">{description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <ul className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
            <time className="self-end text-sm" dateTime={date}>
              {formatDate(date)}
            </time>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default LinkCard;
