import { AppImage } from 'components/AppImage';
import { Loading } from 'components/Loading';

import AvatarStyled from './Avatar.styles';

export interface AvatarProps {
  src?: StaticImageData | string;
  alt?: string;
  shape: 'circular' | 'square';
  size: 'small' | 'large';
  isLoading?: boolean;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  props = {
    isLoading: false,
    ...props,
  };

  return (
    <AvatarStyled className={`${props.shape} ${props.size}`}>
      {props.isLoading &&
        <Loading variant="shimmer" />
      }
      {!props.isLoading &&
        <AppImage
          src={props.src ?? ''}
          alt={props.alt ?? ''}
          width={85}
          height={85}
        />
      }
    </AvatarStyled>
  );
};

export default Avatar;
