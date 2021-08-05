import { pascalCase } from 'change-case';
import { Suspense, lazy } from 'react';

import Icons from 'assets/icons/svg/Icons.svg';

import IconStyled from './Icon.styles';
import HeroiconName from './heroicon';

interface CustomIconProps {
  name: string;
  kind: 'custom';
}

export interface HeroiconProps {
  name: HeroiconName;
  style?: 'solid' | 'outline';
  kind?: 'heroicon';
  color?: 'default' | 'primary' | 'danger';
  size?: 32 | 24;
}

export type IconProps = CustomIconProps | HeroiconProps;

/**
 * The Icon component integrates 226 icons from [Heroicon](https://heroicons.com)
 * in both solid and outlined styles.
 *
 * ## Usage
 *
 * Icons use `currentColor` to determine their fill or stroke colors.
 * To set a color, set the `color` style property on the icon itself or on a
 * parent element.
 *
 * Icons are sized relative to their current font size. To change their size,
 * set the `font-size` style property on the icon itself or on a parent element.
 *
 * ## Available Icons
 * Search the available icons at https://heroicons.com.
 */
const Icon: React.FC<IconProps> = (props) => {
  if (props.kind == 'custom') {
    return <IconStyled>{customIcon(props.name)}</IconStyled>;
  }

  const style = props.style ? props.style : 'outline';
  const nameAsPascal = pascalCase(props.name);
  const Component = lazy(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    () => import(`icons/heroicons/${style}/${nameAsPascal}`)
  );

  const size = props.size || 24;
  const color = props.color || 'default';

  return (
    <IconStyled className={color}>
      <Suspense fallback="">
        <Component height={size} width={size} />
      </Suspense>
    </IconStyled>
  );
};

const customIcon = (name: string) => {
  return (
    <svg width="72" height="72" fill="currentColor">
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
