import { Authenticated } from 'app/components/Authenticated';
import { DeleteAccount as DeleteAccountScreen } from 'screens';

export default function DeleteAccount() {
  return (
    <Authenticated>
      <DeleteAccountScreen />
    </Authenticated>
  );
}
