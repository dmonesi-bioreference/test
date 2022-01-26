import { useEffect, useRef } from 'react';

import { Button } from 'components/Button';
import { Typography } from 'components/Typography';

import TimelineItemBodyStyled from './TimelineItemBody.styles';

interface TimelineItemBodyProps {
  body?: string;
  link:
    | {
        label: string;
        onClick: () => void;
      }
    | undefined;
  onHeightChange: (h: number) => void;
}

const TimelineItemBody: React.FC<TimelineItemBodyProps> = (props) => {
  const detailsRef = useRef<HTMLHeadingElement>(null);

  const { onHeightChange } = props;

  useEffect(() => {
    onHeightChange(detailsRef.current ? detailsRef.current.offsetHeight : 0);
    return () => onHeightChange(0);
  }, [onHeightChange]);

  return (
    <TimelineItemBodyStyled ref={detailsRef}>
      <Typography type="body">{props.body}</Typography>
      {props.link && (
        <Button kind="link-small" onClick={props.link.onClick}>
          {props.link.label}
        </Button>
      )}
    </TimelineItemBodyStyled>
  );
};

export default TimelineItemBody;
