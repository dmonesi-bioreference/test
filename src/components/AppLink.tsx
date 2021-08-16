import Link from 'next/link';

type NextLinkProps = Parameters<typeof Link>[0];

export const AppLink = (props: Props<NextLinkProps>) => {
  return process.env.NODE_ENV === 'test' ? (
    <div {...props} />
  ) : (
    <Link {...props} />
  );
};
