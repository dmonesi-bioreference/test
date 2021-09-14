import Head from 'next/head';
import { useRouter } from 'next/router';

import { StepOne, StepTwo, StepThree, StepFour } from 'screens';

export default function RegistrationPage() {
  const router = useRouter();
  const { step } = router.query;
  const page = () => {
    switch (step) {
      case '2':
        return <StepTwo />;
      case '3':
        return <StepThree />;
      case '4':
        return <StepFour />;
      default:
        return <StepOne />;
    }
  };

  return (
    <>
      <Head>
        <title>GeneDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{page()}</main>

      <footer />
    </>
  );
}
