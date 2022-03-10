import { useState } from 'react';

import { Accordion } from 'components/Accordion';
import { Icon } from 'components/Icon';
import { Typography } from 'components/Typography';
import { colors } from 'styles';

import TimelineItemStyled from './TimelineItem.styles';
import TimelineItemBody from './TimelineItemBody';

export interface TimelineItemProps {
  /** Use to present a heading. */
  heading?: string;
  /** Use to present a body. */
  body?: string;
  /** Use to display a link below the body. */
  link?: {
    label: string;
    onClick: () => void;
  };
  /** Use to display icon against the heading. */
  icon?: JSX.Element;
  /** Use to calculate the amount of fill in the circle around the icon. */
  percent?: number;
  /** Set to true to allow the timeline item to be collapsable. */
  isCollapseEnabled?: boolean;
  /** Set to true to set the heading size to 14px, else 16px. */
  isSmall?: boolean;
  /** Set to true to remove the connecting line below the timeline item. */
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
    !props.isCollapseEnabled
  );

  /* Used to set the custom svg height directly from html ref */
  const onHeightChange = (h) => {
    setBodyHeight(h);
  };

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

      <Accordion
        isCollapsable={props.isCollapseEnabled ?? true}
        heading={
          <Typography type="body" level={`${props.isSmall ? '8' : '5'}`}>
            {props.heading}
          </Typography>
        }
        body={
          <TimelineItemBody
            body={props.body}
            link={props.link}
            onHeightChange={onHeightChange}
          />
        }
        onRender={(e) =>
          setHeadingHeight(e.current ? e.current.offsetHeight : 0)
        }
        onBodyVisibilityChange={(e) => setBodyVisible(e)}
      />
    </TimelineItemStyled>
  );
};

export default TimelineItem;
