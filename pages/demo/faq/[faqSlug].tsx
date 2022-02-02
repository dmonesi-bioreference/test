import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import { FAQsPage } from 'screens';

export default function Resources() {
  const router = useRouter();
  const { faqSlug, question } = router.query;

  return (
    <>
      <Head>
        <title>Project Pandas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FAQsPage slug={faqSlug as string} question={question as string} />
    </>
  );
}
