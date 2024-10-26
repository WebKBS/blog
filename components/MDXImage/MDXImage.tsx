import { shimmer, toBase64 } from '@/utils/imageSkeleton';
import Image, { StaticImageData } from 'next/image';

interface IMDXImage {
  src: StaticImageData;
  alt: string;
  width?: string;
}

const MDXImage = ({ src, alt, width }: IMDXImage) => {
  if (!src || !alt) {
    throw new Error('src와 alt 속성은 필수입니다');
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={src}
        width={1024}
        height={1024}
        alt={alt}
        className="w-auto mb-2 border border-gray-200 dark:border-gray-700 rounded-md"
        style={width ? { width } : { width: '640px' }}
        quality={100}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
      />
      <p className="text-center text-gray-500 dark:text-gray-400 m-0 text-sm">
        {alt}
      </p>
    </div>
  );
};

export default MDXImage;
