import { formatDate } from '@/lib/utils';
import Link from 'next/link';

interface LinkCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}

const LinkCard = ({ title, description, date, tags, slug }: LinkCardProps) => {
  return (
    <li>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <time dateTime={date}>{formatDate(date)}</time>
        <p>{tags}</p>
        <Link href={`/${slug}`}>Read more</Link>
      </div>
    </li>
  );
};

export default LinkCard;
