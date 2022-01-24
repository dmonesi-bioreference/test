import { useEffect, useRef, useState } from 'react';

import { Button, Heading, Icon } from 'components';

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
  const [detailsHeight, setDetailsHeight] = useState<number>(0);
  const [bodyVisible, setBodyVisible] = useState<boolean>(
    props.isCollapseEnabled ? false : true
  );

  const headingRef = useRef<HTMLHeadingElement>(null);

  const onHeadingClick = () => {
    if (props.isCollapseEnabled) setBodyVisible(!bodyVisible);
  };

  const onHeightChange = (h) => {
    setDetailsHeight(h);
  };

  useEffect(() => {
    setHeadingHeight(headingRef.current ? headingRef.current.offsetHeight : 0);
  }, []);

  const grid = () => {
    const radius = props.isSmall ? 10 : 14;
    const strokeWidth = props.isSmall ? 4 : 6;

    return {
      radius,
      strokeWidth,
      width: radius * 2 + strokeWidth,
      height: radius * 2 + strokeWidth,
      origin: {
        x: radius + strokeWidth / 2,
        y: radius + strokeWidth / 2,
      },
    };
  };

  return (
    <TimelineItemStyled
      bodyVisible={bodyVisible}
      lineHeight={headingHeight + (bodyVisible ? detailsHeight : 0)}
      {...props}
      grid={grid()}
    >
      <div className="icon">
        <svg>
          <circle
            className="bg"
            cx={grid().origin.x}
            cy={grid().origin.y}
            r={grid().radius}
          />
          <circle className="indicator" />
          {!props.isTail && <rect />}

          <foreignObject
            x={grid().origin.x - grid().radius / 2}
            y={grid().origin.y - grid().radius / 2}
            width={grid().radius}
            height={grid().radius}
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
          >
            <Heading level={props.isSmall ? '8' : '5'}>{props.heading}</Heading>
          </Button>
        </div>

        <TimelineItemBody
          body={props.body}
          link={props.link}
          onHeightChange={onHeightChange}
        />
      </div>
    </TimelineItemStyled>
  );
};

export default TimelineItem;
