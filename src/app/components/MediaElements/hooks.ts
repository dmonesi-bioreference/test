import { useAppSelector } from 'app/components/Shell';

export function useAudioMetadata() {
  const state = {
    photo: useAppSelector((state) => state.context.geneticCounselor.photo),
  };
  
  return [state] as const;
}
