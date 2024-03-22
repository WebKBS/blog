import Image, { StaticImageData } from 'next/image';

interface IMDXImage {
  src: StaticImageData;
  title: string;
  width?: string;
}

const MDXImage = ({ src, title, width }: IMDXImage) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={src}
        width={1024}
        height={1024}
        alt={title}
        className="w-auto mb-2 border border-gray-200 dark:border-gray-700 rounded-md"
        style={width ? { width } : {}}
      />
      <p className="text-center text-gray-500 dark:text-gray-400 m-0 text-sm">
        {title}
      </p>
    </div>
  );
};

export default MDXImage;
