import { posts } from '#site/content';

export const metadata = {
  title: 'blog',
  description: '블로그 홈',
};

const BlogPage = () => {
  console.log(posts.length);

  return <section className="container">BlogPage</section>;
};

export default BlogPage;
