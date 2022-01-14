import { setupFormDispatchMap } from './forms';
import { setupRequestDispatchMap } from './requests';

export function setupDispatchMap(send: AppService['send']) {
  return {
    ...setupFormDispatchMap(send),
    ...setupRequestDispatchMap(send),
  };
}

export * from './machine';
