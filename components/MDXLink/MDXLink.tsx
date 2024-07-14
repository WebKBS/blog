const MDXLink = ({ href, title }: { href: string; title: string }) => {
  if (!href || !title) {
    throw new Error('href와 title 속성은 필수입니다');
  }

  return (
    <a
      href={href}
      target={href.includes('recodelog.com') ? '_self' : '_blank'}
      rel={href.includes('recodelog.com') ? '' : 'noopener noreferrer'}
      className="text-slate-400 italic bg-secondary px-2 py-1 rounded-md"
    >
      `{title}`
    </a>
  );
};

export default MDXLink;
