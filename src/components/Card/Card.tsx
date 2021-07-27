import CardStyled from './Card.styles';

export interface CardProps {
  /** Optional title for the card. */
  title?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <CardStyled className="card">
      {props.title && (
        <header className="card__header">
          <div className="card__title">{props.title}</div>
        </header>
      )}
      <div className="card__body">{props.children}</div>
    </CardStyled>
  );
};

export default Card;
