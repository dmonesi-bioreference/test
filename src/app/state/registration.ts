import { assign } from '@xstate/immer';
import isObject from 'lodash/isObject';

declare global {
  interface AppEventMap {
    nextStep: { type: 'nextStep' };
    visitStep: { type: 'visitStep'; step: RegistrationSteps };
  }
}

type RegistrationSteps = keyof typeof machine['states'];

export const actions = {
  saveRegistrationStep: assign(
    (context: AppContext, event: AppEvents, meta) => {
      if (meta.state?.matches('registration')) {
        const value = meta.state?.value;

        if (isObject(value)) {
          const currentRegistrationStep = Reflect.get(value, 'registration');
          const steps = new Set(context.registration.steps);

          steps.add(currentRegistrationStep);

          context.registration.steps = [...steps];
        }
      }
    }
  ),
};

export const context = {
  steps: [] as string[],
};

const isVisit = (candidate: AppEvents): candidate is AppEventMap['visitStep'] =>
  candidate.type === 'visitStep';

const hasVisitedRegistrationStep =
  (givenStep: RegistrationSteps) => (context: AppContext, event: AppEvents) =>
    isVisit(event) &&
    context.registration.steps.includes(event.step) &&
    event.step === givenStep;

export const guards = {
  visitedName: hasVisitedRegistrationStep('name'),
  visitedContact: hasVisitedRegistrationStep('contact'),
  visitedRelationship: hasVisitedRegistrationStep('relationship'),
  visitedPassword: hasVisitedRegistrationStep('password'),
  hasNotLoggedStepYet: (
    context: AppContext,
    event: AppEvents,
    meta: AppGuardMeta
  ) => {
    if (meta.state?.matches('registration')) {
      const value = meta.state?.value;

      if (isObject(value)) {
        const currentRegistrationStep = Reflect.get(value, 'registration');

        return !context.registration.steps.includes(currentRegistrationStep);
      }
    }
    return false;
  },
};

export const machine = {
  initial: 'consent',
  always: [{ actions: 'saveRegistrationStep', cond: 'hasNotLoggedStepYet' }],
  on: {
    visitStep: [
      { target: '.name', cond: 'visitedName' },
      { target: '.contact', cond: 'visitedContact' },
      { target: '.relationship', cond: 'visitedRelationship' },
      { target: '.password', cond: 'visitedPassword' },
    ],
  },
  states: {
    consent: { on: { nextStep: 'name' } },
    name: { on: { nextStep: 'contact' } },
    contact: { on: { nextStep: 'relationship' } },
    relationship: { on: { nextStep: 'password' } },
    password: {},
  },
};
