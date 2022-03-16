import { StyleGuideItem } from '../StyleGuideItem';

import SpacingStyled from './Spacing.styles';

export interface SpacingProps {
  title: string;
  size: string;
}

const Spacing: React.FC<SpacingProps> = (props) => {
  return (
    <SpacingStyled {...props}>
      <div className="spacing--square" />
      <StyleGuideItem label={props.title} />
    </SpacingStyled>
  );
};

export default Spacing;
