import Image from 'next/image';

type NextImageProps = Parameters<typeof Image>[0];

export const AppImage = (props: Props<NextImageProps>) => {
  const isTest = process.env.NODE_ENV === 'test';

  return isTest ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt} src={props.src as string} />
  ) : (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} loader={({ src }) => src} objectFit="cover" />
  );
};
