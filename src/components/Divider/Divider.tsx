import DividerStyled from './Divider.styles';

export interface DividerProps {
  color?: 'neutral' | 'coral';
  thickness?: 'thick' | 'thin';
}

const Divider: React.FC<DividerProps> = (props) => {
  const color = props.color || 'neutral';
  const thickness = props.thickness || 'thin';
  return <DividerStyled className={`line line--${color} line--${thickness}`} />;
};

export default Divider;
