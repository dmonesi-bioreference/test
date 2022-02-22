import clsx from 'clsx';
import Link from 'next/link';

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
  href?: string;
}

/**
 * @name Card
 * @returns A div or a link depending on the href prop
 */
const Card: React.FC<CardProps> = (props) => {
  const cardClasses = clsx(
    props.isLoading && 'card--loading',
    props.transparent && 'card--transparent'
  );

  return (
    // This will be a link if href is provided, but will return a simple div otherwise
    <Link href={props.href || ''} passHref>
      <CardStyled
        {...props}
        className={cardClasses}
        as={props.href && 'button'}
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
    </Link>
  );
};

export default Card;
