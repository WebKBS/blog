const MDXLink = ({ href, title }: { href: string; title: string }) => {
  if (!href || !title) {
    throw new Error('href와 title 속성은 필수입니다');
  }

  return (
    <a
      href={href}
      target={href.includes('recodelog.com') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="text-slate-400 italic"
    >
      `{title}`
    </a>
  );
};

export default MDXLink;
