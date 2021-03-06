import { pascalCase } from 'change-case';
import React, { useState, useEffect, useRef } from 'react';

import { customIcons } from './CustomIcon';
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
  color?: undefined | 'primary' | 'danger' | 'white';
  /* large = 32px, small = 24px, x-small = 16px */
  size?: 'large' | 'small' | 'x-small';
  encircled?: boolean;
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
 * To ensure passing colors through, default value for color is undefined,
 * and therefore will rely on the parent colors as noted above.
 *
 * Icons are sized relative to their current font size. To change their size,
 * set the `font-size` style property on the icon itself or on a parent element.
 *
 * ## Available Icons
 * Search the available icons at https://heroicons.com.
 */
const Icon: React.FC<IconProps> = (props) => {
  if (props.kind == 'custom') {
    return <IconStyled>{customIcons[props.name]}</IconStyled>;
  }

  return <AsyncHeroIcon {...props} />;
};

const convertToNumber = (size: string) => {
  switch (size) {
    case 'small':
      return 24;
    case 'large':
      return 32;
    case 'x-small':
      return 16;
    default:
      return 24;
  }
};

const AsyncHeroIcon: React.FC<HeroiconProps> = ({
  style = 'outline',
  size = 'small',
  color,
  name,
  encircled = false,
}) => {
  const [icon, setComponent] = useState<React.ReactNode | null>(null);

  const nameRef = useRef(name);

  useEffect(() => {
    let mounted = true;
    const currentName = nameRef.current;

    if (!icon || currentName !== name) {
      nameRef.current = name;
      import(`icons/heroicons/${style}/${pascalCase(name)}`)
        .then((iconModule) =>
          mounted && Reflect.has(iconModule, 'default')
            ? setComponent(
                <iconModule.default
                  height={`${convertToNumber(size)}px`}
                  width={`${convertToNumber(size)}px`}
                />
              )
            : null
        )
        .catch(() => undefined);
    }

    return () => {
      mounted = false;
    };
  }, [icon, style, name, size]);

  if (!icon) {
    return null;
  }

  if (encircled) {
    return (
      <IconStyled className="encircled">
        <div className={`${color} ${size}`}>{icon}</div>
      </IconStyled>
    );
  }

  return <IconStyled className={`${color} ${size}`}>{icon}</IconStyled>;
};

export default Icon;
