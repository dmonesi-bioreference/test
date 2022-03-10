import DividerStyled from './Divider.styles';

export interface DividerProps {
  /** The color of the divider, defaults to 'neutral'. */
  color?: 'neutral' | 'lime';
  /** The thickness of the divider, defaults to 'thin'. */
  thickness?: 'thick' | 'thin';
}

const Divider: React.FC<DividerProps> = (props) => {
  const color = props.color || 'neutral';
  const thickness = props.thickness || 'thin';
  return <DividerStyled className={`line line--${color} line--${thickness}`} />;
};

export default Divider;
