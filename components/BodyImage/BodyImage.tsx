import Image, { StaticImageData } from 'next/image';

interface IBodyImage {
  src: StaticImageData;
  title: string;
}

const BodyImage = ({ src, title }: IBodyImage) => {
  return (
    <div>
      <Image
        src={src}
        width={1024}
        height={1024}
        alt={title}
        className="w-full h-auto mb-2"
      />
      <p className="text-center text-gray-500 m-0 text-sm">{title}</p>
    </div>
  );
};

export default BodyImage;
