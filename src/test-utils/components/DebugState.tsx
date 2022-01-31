import { useAppSelector } from 'app/components/Shell/hooks';

export function DebugState() {
  const states = useAppSelector((state) => state.toStrings().join(', '));

  return <div>{states}</div>;
}
