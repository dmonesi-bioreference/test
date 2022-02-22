import { useRouter } from 'next/dist/client/router';

import { FAQsPage } from 'screens';

export default function Resources() {
  const router = useRouter();
  const { faqSlug, question } = router.query;

  return <FAQsPage slug={faqSlug as string} question={question as string} />;
}
