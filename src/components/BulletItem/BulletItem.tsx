import { ReactNode } from 'react';

import { Typography } from 'components/Typography';

import BulletItemStyled from './BulletItem.styles';

export interface BulletItemProps {
  /** Sets an icon for the bullet point. */
  icon: ReactNode;
  /** The title of the bullet item. */
  title: string;
}

const BulletItem: React.FC<BulletItemProps> = (props) => {
  return (
    <BulletItemStyled>
      {props.icon}
      <div className="bullet-item__text">
        <Typography type="heading" level="5">
          {props.title}
        </Typography>
        <Typography type="body">{props.children}</Typography>
      </div>
    </BulletItemStyled>
  );
};

export default BulletItem;
