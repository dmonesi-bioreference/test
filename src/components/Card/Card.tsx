import CardStyled from './Card.styles';

export interface CardProps {
  /** Header area */
  header?: React.ReactNode;
  /** Footer area */
  footer?: React.ReactNode;
  /** Maximum header height in px without value */
  maxHeaderHeight?: number;
  transparent?: boolean;
}

const Card: React.FC<CardProps> = (props) => {
  const transparent = props.transparent ? 'transparent' : '';
  return (
    <CardStyled {...props} className={`card--${transparent}`}>
      {props.header && <header className="card__header">{props.header}</header>}
      <div className="card__content">{props.children}</div>
      {props.footer && <footer className="card__footer">{props.footer}</footer>}
    </CardStyled>
  );
};

export default Card;
