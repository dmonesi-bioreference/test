import { Authenticated } from 'app/components/Authenticated';
import { HealthProfile } from 'screens';

export default function healthProfile() {
  return (
    <Authenticated>
      <HealthProfile />
    </Authenticated>
  );
}
