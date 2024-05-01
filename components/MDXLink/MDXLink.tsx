const MDXLink = ({ href, title }: { href: string; title: string }) => {
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
