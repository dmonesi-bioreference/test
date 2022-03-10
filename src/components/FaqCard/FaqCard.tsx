import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { List } from 'components/List';
import { Typography } from 'components/Typography';

import FaqCardStyled from './FaqCard.styles';

export interface FaqCardProps {
  /** The title of the FAQ set. */
  title: string;
  /** The description of the FAQ set. */
  label: React.ReactNode;
  /** An array of strings that correspond to a particular FAQ, the FAQ that is selected gets added as a query param to the FAQ page. */
  questions: Array<string>;
  /** The link to the FAQ page. */
  href: string;
}

const FaqCard: React.FC<FaqCardProps> = (props) => {
  const questions = props.questions.map((item, index) => {
    return (
      <Button
        key={index}
        color="light"
        kind="link-medium"
        href={`${props.href}${index === 0 ? '' : `?question=${item}`}`}
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
          <Icon name="puzzle" />
        </div>
        <Typography type="heading" level="3" color="inherit">
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
