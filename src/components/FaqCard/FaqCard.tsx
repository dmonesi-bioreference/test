import { Button, Icon, List, Typography } from 'components';

import FaqCardStyled from './FaqCard.styles';

export interface FaqCardProps {
  title: string;
  label: string;
  questions: Array<string>;
}

const FaqCard: React.FC<FaqCardProps> = (props) => {
  const questions = props.questions.map((item, index) => {
    return (
      <Button
        key={index}
        color="light"
        kind="link-medium"
        href="resources/faqs"
        suffix={<Icon name="chevron-right" size="small" />}
        spreadContent={true}
      >
        {item}
      </Button>
    );
  });
  return (
    <FaqCardStyled>
      <div className="faq-card__header">
        <Icon name="puzzle" color="default" />
        <Typography type="heading" level="3" color="primary">
          {props.title}
        </Typography>
      </div>
      <div className="faq-card__body">
        <div className="faq-card__label">
          <Typography type="body">{props.label}</Typography>
        </div>
        <List kind="plain">{questions}</List>
      </div>
      <div className="faq-card__view-all">
        <Button href="resources/faqs" kind="link-small">
          View all FAQs
        </Button>
      </div>
    </FaqCardStyled>
  );
};

export default FaqCard;
