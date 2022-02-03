import { Authenticated } from 'app/components/Authenticated';
import { TestResults } from 'screens';

export default function ResultsPage() {
  return (
    <Authenticated>
      <TestResults />
    </Authenticated>
  );
}
