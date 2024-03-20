export const defaultData = {
  title: 'RecodeLog',
  description: '나만의 개발 블로그, 기록 또 기록',
  url: 'https://blog-webkbs.vercel.app/', // 나중에 도메인 연결 후 수정
  author: 'devK',
  email: 'dev21c2020@gmail.com',
  links: {
    github: 'https://github.com/WebKBS',
  },
};

export const navigationData = [
  { name: 'home', href: '/' },
  { name: 'blog', href: '/blog' },
  // { name: 'life', href: '/life' },
];

export type DefaultData = typeof defaultData;
