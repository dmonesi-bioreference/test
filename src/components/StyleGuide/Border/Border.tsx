import { StyleGuideItem } from '../StyleGuideItem';

import BorderStyled from './Border.styles';

export interface BorderProps {
  title: string;
  radius?: string;
  borderWidth?: string;
  shapeHeight?: string;
  shapeWidth?: string;
}

const Border: React.FC<BorderProps> = (props) => {
  return (
    <BorderStyled {...props}>
      <div className="border--shape" />
      <StyleGuideItem label={props.title} />
    </BorderStyled>
  );
};

export default Border;
