import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center py-20 gap-4">
      <h2 className="uppercase">Not Found</h2>
      <p>페이지를 찾을수 없습니다.</p>
      <Link href="/" className={buttonVariants({ variant: 'outline' })}>
        Home
      </Link>
    </div>
  );
}
