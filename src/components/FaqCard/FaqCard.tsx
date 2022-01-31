import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { List } from 'components/List';
import { Typography } from 'components/Typography';

import FaqCardStyled from './FaqCard.styles';

export interface FaqCardProps {
  title: string;
  label: React.ReactNode;
  questions: Array<string>;
  href: string;
}

const FaqCard: React.FC<FaqCardProps> = (props) => {
  const questions = props.questions.map((item, index) => {
    return (
      <Button
        key={index}
        color="light"
        kind="link-medium"
        href={props.href}
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
        <div className="faq-card__header-icon">
          <Icon name="puzzle" color="default" />
        </div>
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
        <Button href={props.href} kind="link-small">
          View all FAQs
        </Button>
      </div>
    </FaqCardStyled>
  );
};

export default FaqCard;
