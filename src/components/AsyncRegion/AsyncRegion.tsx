import { fadeWhileWorking } from 'styles/animations';

import { AsyncRegionContainer } from './AsyncRegion.styles';

interface AsyncRegionProps {
  pending: boolean;
}

export function AsyncRegion(props: Props<AsyncRegionProps>) {
  return (
    <AsyncRegionContainer
      pending={props.pending}
      animate={
        props.pending
          ? fadeWhileWorking.states.working
          : fadeWhileWorking.states.idle
      }
      variants={fadeWhileWorking.variants}
      transition={fadeWhileWorking.transition}
      role="region"
      aria-label="loaded content"
    >
      {props.children}
    </AsyncRegionContainer>
  );
}
