import DeviceView from '@/components/DeviceView';
import InnerHeight from '@/components/DeviceView/InnerHeight';
import InnerWidth from '@/components/DeviceView/InnerWidth';
import OuterHeight from '@/components/DeviceView/OuterHeight';
import OuterWidth from '@/components/DeviceView/OuterWidth';
import { WebPage, WithContext } from 'schema-dts';

export const metadata = {
  title: '브라우저 Viewport 사이즈 확인',
  description: '브라우저 Viewport 사이즈 확인. Viewport, Window 사이즈 확인',
};

const DevicePage = () => {
  const jsonLd: WithContext<WebPage> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '브라우저 Viewport 사이즈 확인',
    description: '브라우저 Viewport 사이즈 확인. Viewport, Window 사이즈 확인',
    url: 'https://recodelog.com/device',
    inLanguage: 'ko-KR',
    datePublished: '2024-06-25',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Person',
      name: 'WebKBS',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Recode Log',
      logo: {
        '@type': 'ImageObject',
        url: 'https://recodelog.com/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DeviceView />
      <section className="pb-24 pt-12 max-w-screen-lg px-6 mx-auto">
        <h1 className="text-2xl font-semibold">
          브라우저 Viewport 사이즈 확인
        </h1>
        <p className="mt-4 text-lg text-zinc-500 mb-6">
          현재 브라우저의 Viewport 사이즈입니다.
        </p>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-md text-white">
            <h2 className="text-xl font-bold mb-4">브라우저 Viewport 사이즈</h2>
            <p className="mb-4">
              브라우저 Viewport 사이즈는 웹 페이지가 표시되는 영역의 사이즈를
              의미합니다. 여기에는 주소 표시줄, 즐겨찾기 바, 개발자 도구 등이
              포함되지 않습니다.
            </p>
            <div className="flex items-center space-x-2">
              <p className="flex-shrink-0">브라우저 Viewport width:</p>
              <InnerWidth />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p className="flex-shrink-0">브라우저 Viewport height:</p>
              <InnerHeight />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-md text-white">
            <h2 className="text-xl font-bold mb-4">
              브라우저 전체 창의 사이즈
            </h2>
            <p className="mb-4">
              브라우저 전체 창의 사이즈는 브라우저의 전체 사이즈를 의미합니다.
              여기에는 브라우저의 경계선, 스크롤바, 주소 표시줄 등이 포함됩니다.
            </p>
            <div className="flex items-center space-x-2">
              <p className="flex-shrink-0">브라우저 전체 창 width:</p>
              <OuterWidth />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p className="flex-shrink-0">브라우저 전체 창 height:</p>
              <OuterHeight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevicePage;
