import { Spinner } from 'components/Spinner';
import { fadeWhileWorking, slideInRight } from 'styles/animations';

import {
  AsyncRegionActivity,
  AsyncRegionActivityIndicator,
  AsyncRegionContainer,
} from './AsyncRegion.styles';

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
    >
      <AsyncRegionActivity>
        {props.pending ? (
          <AsyncRegionActivityIndicator
            variants={slideInRight.variants}
            exit={slideInRight.variants.hidden}
            animate={
              props.pending
                ? slideInRight.states.visible
                : slideInRight.states.hidden
            }
            transition={slideInRight.transition}
          >
            <Spinner data-testid="async-region-spinner" />
          </AsyncRegionActivityIndicator>
        ) : null}
      </AsyncRegionActivity>
      {props.children}
    </AsyncRegionContainer>
  );
}
