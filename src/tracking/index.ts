import TagManager from 'react-gtm-module';

import { TrackingEvents } from './events';
import { SignUpFlowEventProps } from './types';

export const trackEvent = (name: string, props?: Record<string, any>) => {
  TagManager.dataLayer({
    dataLayer: {
      event: name,
      ...props,
    },
  });
};

export const trackSignUpFlowEvent = (props: SignUpFlowEventProps) =>
  trackEvent(TrackingEvents.SignUpFlow, props);

export const trackSignUpEvent = () =>
  trackEvent(TrackingEvents.SignUpCompleted);
