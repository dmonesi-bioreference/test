import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Typography } from 'components/Typography';
import { colors } from 'styles';
import { slideInDown } from 'styles/animations';

import TimelineItemStyled from './TimelineItem.styles';
import TimelineItemBody from './TimelineItemBody';

export interface TimelineItemProps {
  heading?: string;
  body?: string;
  link?: {
    label: string;
    onClick: () => void;
  };
  icon?: JSX.Element;
  percent?: number;
  isCollapseEnabled?: boolean;
  isSmall?: boolean;
  isTail?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  props = {
    icon: <Icon name="search" style="solid" />,
    percent: 100,
    isCollapseEnabled: true,
    isSmall: false,
    isTail: false,
    ...props,
  };

  const [headingHeight, setHeadingHeight] = useState<number>(0);
  const [bodyHeight, setBodyHeight] = useState<number>(0);
  const [bodyVisible, setBodyVisible] = useState<boolean>(
    props.isCollapseEnabled ? false : true
  );

  const headingRef = useRef<HTMLHeadingElement>(null);

  const onHeadingClick = () => {
    if (props.isCollapseEnabled) setBodyVisible(!bodyVisible);
  };

  /* Used to set the custom svg height directly from html ref */
  const onHeightChange = (h) => {
    setBodyHeight(h);
  };

  useEffect(() => {
    setHeadingHeight(headingRef.current ? headingRef.current.offsetHeight : 0);
  }, []);

  /* Variables shared between svgs (here) and in styling logic */
  const figure = () => {
    const radius = props.isSmall ? 10 : 14;
    const iconStrokeWidth = props.isSmall ? 4 : 6;
    const lineWidth = 4;

    return {
      radius,
      lineWidth,
      iconStrokeWidth,
      diameter: radius * 2 + iconStrokeWidth,
      height: radius * 2 + iconStrokeWidth,
      origin: {
        x: radius + iconStrokeWidth / 2,
        y: radius + iconStrokeWidth / 2,
      },
    };
  };

  return (
    <TimelineItemStyled
      bodyVisible={bodyVisible}
      contentHeight={headingHeight + (bodyVisible ? bodyHeight : 0)}
      {...props}
      figure={figure()}
    >
      <div className="icon">
        <svg>
          <circle
            className="bg"
            cx={figure().origin.x}
            cy={figure().origin.y}
            r={figure().radius}
            stroke={colors.grey[800]}
          />
          <circle
            className="indicator"
            cx={figure().origin.x}
            cy={figure().origin.y}
            r={figure().radius}
            strokeDasharray={2 * Math.PI * figure().radius}
            stroke={colors.grey[900]}
            strokeDashoffset={
              ((100 - (props.percent || 0)) / 100) *
              2 *
              Math.PI *
              figure().radius
            }
            transform={`rotate(-90 ${figure().origin.x} ${figure().origin.y})`}
          />
          {!props.isTail && (
            <rect
              x={figure().origin.x - figure().lineWidth / 2}
              y={figure().height}
              width={figure().lineWidth}
              height="100%"
            />
          )}

          <foreignObject
            x={figure().origin.x - figure().radius / 2}
            y={figure().origin.y - figure().radius / 2}
            width={figure().radius}
            height={figure().radius}
            style={{ position: 'fixed' }}
          >
            {props.icon}
          </foreignObject>
        </svg>
      </div>

      <div className="timeline-item-content">
        <div ref={headingRef}>
          <Button
            kind="link-medium"
            suffix={
              props.isCollapseEnabled ? (
                <Icon name="chevron-left" style="solid" />
              ) : null
            }
            onClick={onHeadingClick}
            className="header__link"
          >
            <Typography type="body" level={`${props.isSmall ? '8' : '5'}`}>
              {props.heading}
            </Typography>
          </Button>
        </div>
        <AnimatePresence>
          {bodyVisible && (
            <motion.div
              initial={
                props.isCollapseEnabled
                  ? slideInDown.states.hidden
                  : slideInDown.states.visible
              }
              animate={slideInDown.states.animate}
              variants={slideInDown.variants}
              transition={slideInDown.transition}
              key="body"
            >
              <TimelineItemBody
                body={props.body}
                link={props.link}
                onHeightChange={onHeightChange}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TimelineItemStyled>
  );
};

export default TimelineItem;
