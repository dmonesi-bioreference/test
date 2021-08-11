import Head from 'next/head';

import { Typography } from 'components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project Pandas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography level="1" type="heading">
          Hello world
        </Typography>
      </main>

      <footer></footer>
    </div>
  );
}
