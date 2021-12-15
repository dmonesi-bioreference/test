import { TimelineItemProps } from "components/TimelineItem/TimelineItem";

export interface TimelineStateProps {
  present?: TimelineItemProps,
  past?: TimelineItemProps,
  future?: TimelineItemProps
}