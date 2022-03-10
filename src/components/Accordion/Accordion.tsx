import { AnimatePresence, motion } from 'framer-motion';
import { RefObject, useEffect, useRef, useState } from 'react';

import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Typography } from 'components/Typography';
import { rotateDown } from 'styles/animations/rotate';
import { slideInDown } from 'styles/animations/slide-in';

import AccordionStyled, {
  AccordionBodyStyled,
  AccordionHeaderStyled,
} from './Accordion.styles';

export interface AccordionProps {
  /** The heading. */
  heading: string | React.ReactNode;
  /** Text which appears in collapsable dropdown. */
  body: string | React.ReactNode;
  /** Optional icon displayed in heading. */
  icon?: React.ReactNode;
  /** Set to true to add a collapsable dropdown. */
  isCollapsable?: boolean;
  /** Specify the onRender event for when the accordion mounts and is rendered. */
  onRender?: (headingRef: RefObject<HTMLHeadingElement>) => void;
  /** Specify the onBodyVisibilityChange event for when the dropdown is opened or closed. */
  onBodyVisibilityChange?: (bodyVisible: boolean) => void;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  props = {
    isCollapsable: true,
    ...props,
  };

  const [bodyVisible, setBodyVisible] = useState<boolean>(!props.isCollapsable);

  const { onRender, onBodyVisibilityChange } = props;

  const headingRef = useRef<HTMLHeadingElement>(null);

  const onHeadingClick = () => {
    if (props.isCollapsable) setBodyVisible(!bodyVisible);
  };

  useEffect(() => {
    if (onBodyVisibilityChange) onBodyVisibilityChange(bodyVisible);
  }, [onBodyVisibilityChange, bodyVisible]);

  useEffect(() => {
    if (onRender) onRender(headingRef);
  });

  return (
    <AccordionStyled>
      <AccordionHeaderStyled ref={headingRef}>
        <Button
          kind="link-medium"
          spreadContent={true}
          suffix={
            props.isCollapsable ? (
              <motion.div
                animate={
                  bodyVisible ? rotateDown.states.down : rotateDown.states.none
                }
                variants={rotateDown.variants}
                transition={rotateDown.transition}
                key="icon"
              >
                <Icon name="chevron-left" style="solid" />
              </motion.div>
            ) : null
          }
          onClick={onHeadingClick}
        >
          <>
            {props.icon}
            {props.heading ? (
              <Typography type="body" level="5">
                {props.heading}
              </Typography>
            ) : (
              props.heading
            )}
          </>
        </Button>
      </AccordionHeaderStyled>
      <AnimatePresence>
        {bodyVisible && (
          <motion.div
            initial={
              props.isCollapsable
                ? slideInDown.states.hidden
                : slideInDown.states.visible
            }
            animate={slideInDown.states.animate}
            variants={slideInDown.variants}
            transition={slideInDown.transition}
            key="body"
          >
            <AccordionBodyStyled>{props.body}</AccordionBodyStyled>
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionStyled>
  );
};

export default Accordion;
