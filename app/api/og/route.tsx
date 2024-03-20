// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx
// og:image를 생성하는 API 라우트 공식 문서 참고

import { defaultData } from '@/config/defaultData';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const interBold = fetch(
  new URL('../../../assets/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get('title');
    let description = searchParams.get('description');

    if (!title) {
      return new Response('title', {
        status: 400,
      });
    }

    if (!description) {
      description = '';
    }

    const heading = title.length > 40 ? `${title.substring(0, 140)}...` : title;
    const desc =
      description.length > 120
        ? `${description.substring(0, 120)}...`
        : description;

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
          <div tw="flex items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_21_26)">
                <path
                  d="M0 2.5C0 1.11929 1.11929 0 2.5 0H37.5C38.8807 0 40 1.11929 40 2.5V37.5C40 38.8807 38.8807 40 37.5 40H2.5C1.11929 40 0 38.8807 0 37.5V2.5Z"
                  fill="#7F00FF"
                />
                <path
                  d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20Z"
                  fill="white"
                />
                <path
                  d="M9 31V9H20.1918C22.2203 9 23.9709 9.2972 25.4438 9.8916C26.9254 10.4788 28.0675 11.3239 28.8701 12.4268C29.6727 13.5225 30.074 14.8223 30.074 16.3262C30.074 17.8516 29.6639 19.1478 28.8437 20.2148C28.0235 21.2747 26.8593 22.084 25.3512 22.6426C23.8431 23.194 22.0571 23.4697 19.9934 23.4697H12.9158V19.2803H18.7763C19.7641 19.2803 20.5887 19.1764 21.2502 18.9688C21.9204 18.7539 22.4275 18.4316 22.7715 18.002C23.1155 17.5651 23.2874 17.0065 23.2874 16.3262C23.2874 15.6458 23.1155 15.0837 22.7715 14.6396C22.4275 14.1885 21.9204 13.8519 21.2502 13.6299C20.5799 13.4007 19.7553 13.2861 18.7763 13.2861H15.5484V31H9ZM24.2532 20.9453L31 31H23.8563L17.2417 20.9453H24.2532Z"
                  fill="#7F00FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_21_26">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p tw="ml-2 font-bold text-2xl">RecodeLog</p>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
              BLOG POST
            </div>
            <div tw="flex text-[80px] font-bold text-[50px] mb-6">
              {heading}
            </div>
            <div tw="text-3xl">{desc}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-2xl">{defaultData.url}</div>
            <div tw="flex items-center text-2xl gap-2">
              <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  fill="#24292f"
                />
              </svg>
              <div tw="flex ml-2">{defaultData.links.github}</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontBold,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response('이미지 만들기 실패', { status: 500 });
  }
}
