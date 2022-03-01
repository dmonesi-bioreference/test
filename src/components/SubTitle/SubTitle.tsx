import { Divider } from 'components/Divider';
import { Typography } from 'components/Typography';

import SubTitleStyled from './SubTitle.styles';

export interface SubTitleProps {}

const SubTitle: React.FC<SubTitleProps> = (props) => {
  return (
    <SubTitleStyled className="sub-title">
      <div>
        <div className="sub-title__label">
          <Typography type="label" labelType="title" color="minor">
            {props.children}
          </Typography>
        </div>
        <Divider color="lime" thickness="thick" />
      </div>
    </SubTitleStyled>
  );
};

export default SubTitle;
