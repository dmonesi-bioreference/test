/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link';

type NextLinkProps = Parameters<typeof Link>[0];

export const AppLink = (props: Props<NextLinkProps>) => {
  if (process.env.NODE_ENV === 'test') {
    return <div {...props} style={{ cursor: 'pointer' }} />;
  } else if (String(process.env.ARTIFACT_TARGET) === 'auth0') {
    // ARTIFACT_TARGET is set in one place: our identity provider
    // deployment. We don't want to deploy live Next.js links in this
    // environment, because there's no backing preload infrastructure
    // available to us in this deploy target.
    //
    // If ARTIFACT_TARGET is not set, this code never runs (and should
    // get entirely dropped at build time).
    //
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <a {...props} />;
  } else {
    return <Link {...props} />;
  }
};
