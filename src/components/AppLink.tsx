/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';

type NextLinkProps = Parameters<typeof Link>[0];

export const AppLink = (props: Props<NextLinkProps>) => {
  if (process.env.NODE_ENV === 'test') {
    return <div {...props} style={{ cursor: 'pointer' }} />;
  } else if (String(process.env.NODE_ENV) === 'auth0') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <a {...props} />;
  } else {
    return <Link {...props} />;
  }
};
