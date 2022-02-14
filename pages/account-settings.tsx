import { Authenticated } from 'app/components/Authenticated';
import { Settings } from 'screens';

export default function settings() {
  return (
    <Authenticated>
      <Settings />
    </Authenticated>
  );
}
