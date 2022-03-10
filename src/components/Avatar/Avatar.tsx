import { AppImage } from 'components/AppImage';
import { Loading } from 'components/Loading';

import AvatarStyled from './Avatar.styles';

export interface AvatarProps {
  /** Image src. */
  src?: StaticImageData | string;
  /** Alternative text. */
  alt?: string;
  /** Adjusts the border radius. */
  shape: 'circular' | 'square';
  /** Small: height & width is 40px. Large: height & width is 80px. */
  size: 'small' | 'large';
  /** Set to true to display the loading component. */
  isLoading?: boolean;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  props = {
    isLoading: false,
    ...props,
  };

  return (
    <AvatarStyled className={`${props.shape} ${props.size}`}>
      {props.isLoading && <Loading variant="shimmer" />}
      {!props.isLoading && (
        <AppImage
          src={props.src ?? ''}
          alt={props.alt ?? ''}
          width={85}
          height={85}
        />
      )}
    </AvatarStyled>
  );
};

export default Avatar;
