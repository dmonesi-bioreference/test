import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

import { ArticlePage } from 'screens';

export default function Resources() {
  const router = useRouter();
  const { articleId } = router.query;
  
  return (
    <>
      <Head>
        <title>Project Pandas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ArticlePage articleId={articleId as string} />
      </main>

      <footer></footer>
    </>
  );
}
