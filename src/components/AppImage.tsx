import Image from 'next/image';

type NextImageProps = Parameters<typeof Image>[0];

export const AppImage = (props: Props<NextImageProps>) => {
  const isStorybook = process.env.STORYBOOK === 'true';
  const isTest = process.env.NODE_ENV === 'test';

  return isTest || isStorybook ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={String(props.src)} alt={props.alt} />
  ) : (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} />
  );
};
