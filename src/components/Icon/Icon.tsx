import React, { FC, Suspense } from 'react';
import { pascalCase } from 'change-case';
import HeroiconName from './heroicon';

export interface IconProps {
  name: HeroiconName;
  style?: 'solid' | 'outline';
  library?: 'heroicons';
}

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
const Icon: FC<IconProps> = ({
  name,
  style = 'solid',
  library = 'heroicons',
}) => {
  const nameAsPascal = pascalCase(name);
  const Component = React.lazy(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    () => import(`../../icons/${library}/${style}/${nameAsPascal}`)
  );

  return (
    <Suspense fallback="">
      <Component />
    </Suspense>
  );
};

export default Icon;
