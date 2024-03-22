import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { sns } from './Sns-data';

const Sns = ({ className }: { className: string }) => {
  return (
    <ul className={className}>
      {sns.map((item, index) => (
        <li key={index} title={item.title}>
          <Link
            href={item.link}
            target="_blank"
            aria-label={item.title}
            title={item.title}
          >
            <GitHubLogoIcon
              width={36}
              height={36}
              className="rounded-md p-1 flex items-center dark:bg-gray-800 bg-gray-100"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Sns;
