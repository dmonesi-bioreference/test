import { useEffect, useRef, useState } from 'react';

import { Button, Heading, Icon } from 'components';

import TimelineItemStyled from './TimelineItem.styles';
import TimelineItemBody from './TimelineItemBody';

export interface TimelineItemProps {
  heading?: string;
  body?: string;
  link: {
    label: string,
    onClick: () => void
  } | undefined;
  icon?: JSX.Element;
  percent?: number,
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
    ...props
  };

  const [headingHeight, setHeadingHeight] = useState<number>(0);
  const [detailsHeight, setDetailsHeight] = useState<number>(0);
  const [bodyVisible, setBodyVisible] = useState<boolean>(props.isCollapseEnabled ? false : true);

  const headingRef = useRef<HTMLHeadingElement>(null);

  const onHeadingClick = () => {
    if (props.isCollapseEnabled) setBodyVisible(!bodyVisible);
  };

  const onHeightChange = h => {
    setDetailsHeight(h);
  };

  useEffect(() => {
    setHeadingHeight(headingRef.current ? headingRef.current.offsetHeight : 0);
  }, []);

  return (
    <TimelineItemStyled
      bodyVisible={bodyVisible}
      lineHeight={headingHeight + (bodyVisible ? detailsHeight : 0)}
      {...props}
    >
      <div className="icon">
        <svg>
          <circle className="bg" />
          <circle className="indicator" />
          {!props.isTail && <rect />}
          
          <foreignObject>
            {props.icon}
          </foreignObject>
        </svg>
      </div>

      <div className="timeline-item-content">
        <div ref={headingRef}>
          <Button
            kind='link-medium'
            suffix={props.isCollapseEnabled ? <Icon name='chevron-left' style='solid' /> : null}
            onClick={onHeadingClick}
          >
            <Heading level={props.isSmall ? '8' : '5'}>
              {props.heading}
            </Heading>
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