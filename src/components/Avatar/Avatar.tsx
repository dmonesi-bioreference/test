import { useAppTranslation } from 'app';
import geneticCounselor from 'assets/images/png/geneticCounselor.png';
import { AppImage } from 'components';

import AvatarStyled from './Avatar.styles';

export interface AvatarProps {
  shape: 'circular' | 'square';
  size: 'small' | 'large';
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const t = useAppTranslation();
  return (
    <AvatarStyled className={`${props.shape} ${props.size}`}>
      <AppImage
        src={geneticCounselor}
        alt={t('components.avatar.geneticCounselor.altText')}
        width={85}
        height={85}
      />
    </AvatarStyled>
  );
};

export default Avatar;
