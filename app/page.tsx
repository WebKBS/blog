import { posts } from '#site/content';
import LinkCard from '@/components/LinkCard';
import { buttonVariants } from '@/components/ui/button';
import { blogStackData } from '@/config/defaultData';
import { sortPosts } from '@/lib/utils';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published)).splice(
    0,
    3
  );

  return (
    <div className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
      <h1 className="text-3xl mb-3 font-bold uppercase">Recode Log</h1>
      <h2 className="mb-6 text-sm">
        RecodeLog는 Recode(기록)과 Log(로그)의 합성 및<br />
        Re + Code + Log의 합성어로 다시쓰는 코드 및 기록하는 블로그입니다.
      </h2>
      {/* <p className="mb-4 text-xl">
        안녕하세요! 🙌 프론트엔드 개발자 강범수입니다.
      </p> */}
      <div className="leading-7 mb-6">
        <p>
          현재 이 블로그는 제가 공부한 내용을 정리하고 기록하고 또 공유하기 위해
          만들었습니다.
        </p>
        <p>
          블로그 처음 개발 시작시 Contentlayer를 사용하여 개발하려했지만 <br />
          Contentlayer 공식 홈페이지의 조짐이 심상치않아 <br />
          이번에 새로나온? 따끈따끈한 Velite js를 사용하여 개발하였습니다.{' '}
          <br />
          앞으로 꾸준히 업데이트 할 예정이니 많은 관심 부탁드립니다.
        </p>
      </div>
      <h3 className="font-bold text-2xl mb-2">BLOG STACK</h3>
      <div className="mb-12">
        <ul className="uppercase flex items-center gap-x-4 gap-y-2 flex-wrap">
          {blogStackData.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="hover:text-primary hover:underline text-green-500 transition-colors font-semibold"
                target="_blank"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl mb-4 font-bold">
          <Link
            href="/blog"
            className="flex items-center gap-2 hover:underline"
          >
            최신 블로그
            <ExternalLink />
          </Link>
        </h2>
        <ul className="flex flex-col gap-4">
          {sortedPosts.map((post) => (
            <LinkCard key={post.slug} {...post} />
          ))}
        </ul>
      </div>
      <div className="py-20">
        <Link href="/blog" className={buttonVariants({ variant: 'secondary' })}>
          더 많은 내용 보러가기 <ArrowUpRight className="ml-1" size={20} />
        </Link>
      </div>
    </div>
  );
}
