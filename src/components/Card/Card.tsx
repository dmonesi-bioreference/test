import CardStyled from './Card.styles';

export interface CardProps {
  header?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <CardStyled >
      <div className="card__header">{props.header}</div>
      <div className="card__content">{props.children}</div>
    </CardStyled>
  );
};

export default Card;
