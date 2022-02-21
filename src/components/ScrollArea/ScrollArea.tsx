import ScrollAreaStyled from './ScrollArea.styles';

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<'div'> {}

/**
 * @description A scrollable area for content. Override default height through style props.
 * @example
 * <ScrollArea style={{ height: '400px' }}>
 *  <div>
 *   <p>Some long content</p>
 *  </div>
 * </ScrollArea>
 */
const ScrollArea: React.FC<ScrollAreaProps> = (props) => {
  return (
    <ScrollAreaStyled style={props.style}>{props.children}</ScrollAreaStyled>
  );
};

export default ScrollArea;
