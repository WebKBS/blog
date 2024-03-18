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
    <li className="border rounded-md flex justify-between  overflow-hidden px-4 py-4">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <time dateTime={date}>{formatDate(date)}</time>
        <p>{tags}</p>
        <Link href={`/${slug}`}>Read more</Link>
      </div>
      {cover ? (
        <Image src={cover} alt={title} width={200} height={200} />
      ) : null}
    </li>
  );
};

export default LinkCard;
