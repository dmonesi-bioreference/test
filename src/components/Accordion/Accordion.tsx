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
  heading: string | React.ReactNode;
  body: string | React.ReactNode;
  icon?: React.ReactNode;
  isCollapsable?: boolean;
  onRender?: (headingRef: RefObject<HTMLHeadingElement>) => void;
  onCollapse?: (bodyVisible: boolean) => void;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  props = {
    isCollapsable: true,
    ...props,
  };

  const [bodyVisible, setBodyVisible] = useState<boolean>(!props.isCollapsable);

  const { onRender, onCollapse } = props;

  const headingRef = useRef<HTMLHeadingElement>(null);

  const onHeadingClick = () => {
    if (props.isCollapsable) setBodyVisible(!bodyVisible);
  };

  useEffect(() => {
    if (onCollapse) onCollapse(bodyVisible);
  }, [onCollapse, bodyVisible]);

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
