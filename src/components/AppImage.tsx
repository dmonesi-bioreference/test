import Image from 'next/image';

type NextImageProps = Parameters<typeof Image>[0];

export const AppImage = ({
  objectPosition,
  ...props
}: Props<NextImageProps>) => {
  const isTest = process.env.NODE_ENV === 'test';

  return isTest ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt} src={props.src as string} />
  ) : (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      objectPosition={objectPosition}
      layout={props.layout || 'responsive'}
      loader={({ src }) => src}
      objectFit={props.objectFit || 'cover'}
    />
  );
};
