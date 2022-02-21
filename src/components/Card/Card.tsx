import clsx from 'clsx';

import { Loading } from 'components/Loading';

import CardStyled from './Card.styles';

export interface CardProps {
  /** Header area */
  header?: React.ReactNode;
  /** Footer area */
  footer?: React.ReactNode;
  /** Maximum header height in px without value */
  maxHeaderHeight?: number;
  transparent?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  /** Link returns a Card as a button */
  href?: string;
}

const Card: React.FC<CardProps> = (props) => {
  const cardClasses = clsx(
    props.isLoading && 'card--loading',
    props.transparent && 'card--transparent'
  );

  return (
    <CardStyled
      {...props}
      className={cardClasses}
      as={props.href && 'button'}
      href={props.href}
    >
      {props.isLoading ? (
        <Loading variant="shimmer" />
      ) : (
        <>
          {props.header && (
            <header className="card__header">{props.header}</header>
          )}
          <div className="card__content">{props.children}</div>
          {props.footer && (
            <footer className="card__footer">{props.footer}</footer>
          )}
        </>
      )}
    </CardStyled>
  );
};

export default Card;
