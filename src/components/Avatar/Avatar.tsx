import { AppImage } from 'components/AppImage';

import AvatarStyled from './Avatar.styles';

export interface AvatarProps {
  src?: StaticImageData | string;
  alt?: string;
  shape: 'circular' | 'square';
  size: 'small' | 'large';
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <AvatarStyled className={`${props.shape} ${props.size}`}>
      <AppImage
        src={props.src ? props.src : ''}
        alt={props.alt ? props.alt : ''}
        width={85}
        height={85}
      />
    </AvatarStyled>
  );
};

export default Avatar;
