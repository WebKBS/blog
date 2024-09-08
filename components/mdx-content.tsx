import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
import MDXAlert from './MDXAlert';
import MDXImage from './MDXImage';
import MDXLink from './MDXLink';

const mdxComponents = {
  Image,
  MDXImage,
  MDXLink,
  MDXAlert,
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export const MDXContent = ({ code, components }: MdxProps) => {
  const Component = useMDXComponent(code);
  return <Component components={{ ...mdxComponents, ...components }} />;
};
