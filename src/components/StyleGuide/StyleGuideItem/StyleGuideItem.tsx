import { StyleLabel } from 'components/StyleGuide/StyleLabel';
import { tokens } from 'styles';

export interface StyleGuideProps {
  label: string;
}

const StyleGuideItem: React.FC<StyleGuideProps> = (props) => (
  <div style={{ display: 'flex', marginBottom: tokens.spacingMedium }}>
    {props.children}
    <StyleLabel>{props.label}</StyleLabel>
  </div>
);

export default StyleGuideItem;



