import Head from 'next/head';
import { useRouter } from 'next/router';

import { AuthenticationForm, FurtherRegistration } from 'screens';

export default function RegistrationPage() {
  const router = useRouter();
  const { step } = router.query;
  const stepTwo = step == '2';

  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{stepTwo ? <FurtherRegistration /> : <AuthenticationForm />}</main>

      <footer></footer>
    </>
  );
}
