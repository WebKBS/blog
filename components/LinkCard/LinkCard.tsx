import { formatDate } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

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
        className="border rounded-md flex flex-col overflow-hidden px-4 py-4 gap-4"
      >
        <div className="w-full relative pt-[100%] overflow-hidden">
          {cover ? (
            <Image
              src={cover}
              alt={title}
              fill
              className="w-full h-auto rounded-sm max-w-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          ) : null}
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <time dateTime={date}>{formatDate(date)}</time>
          <p>{tags}</p>
        </div>
      </Link>
    </li>
  );
};

export default LinkCard;
