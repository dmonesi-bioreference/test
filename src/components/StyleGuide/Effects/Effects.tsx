import { StyleGuideItem } from '../StyleGuideItem';

import EffectsStyled from './Effects.styles';

export interface EffectsProps {
  title: string;
  shadow: string;
}

const Effects: React.FC<EffectsProps> = (props) => {
  return (
    <EffectsStyled {...props}>
      <div className="effect--square" />
      <StyleGuideItem label={props.title} />
    </EffectsStyled>
  );
};

export default Effects;
