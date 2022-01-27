import Head from 'next/head';

import { DeleteAccount } from 'screens';

export default function deleteAccount() {
  return (
    <>
      <Head>
        <title>Delete Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DeleteAccount />
      </main>

      <footer></footer>
    </>
  );
}
