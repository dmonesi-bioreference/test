import { useRouter } from 'next/dist/client/router';

import { ArticlePage } from 'screens';

export default function Resources() {
  const router = useRouter();
  const { articleIdentifier } = router.query;

  return <ArticlePage articleIdentifier={articleIdentifier as string} />;
}
