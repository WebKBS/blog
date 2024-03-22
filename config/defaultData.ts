export const defaultData = {
  title: 'RecodeLog',
  description: '나만의 개발 블로그, 기록 또 기록',
  url: 'https://recodelog.com',
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

export const blogStackData = [
  { name: 'Next.js', href: 'https://nextjs.org/' },
  { name: 'React', href: 'https://reactjs.org/' },
  { name: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
  { name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { name: 'Velite', href: 'https://velite.js.org/' },
];
