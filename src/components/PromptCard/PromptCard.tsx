import { Button, Card, Typography, Icon } from 'components';

import PromptCardStyled from './PromptCard.styles';

export interface PromptCardProps {
  /** Theme name */
  themeName?: 'community' | 'health-profile' | 'resources' | string;
  /** The link to follow when the header is clicked */
  href?: string;
  /** Prompt text of the card */
  prompt: string;
  /** Heading text of the card */
  heading: string;
}

const PromptCard: React.FC<PromptCardProps> = (props) => {
  const promptFragment = (
    <Button className="label__button" kind="link-medium" href={props.href}>
      <div className="label__left">
        <div className="label__prefix">
          <Icon name="user-group" />
        </div>

        <div className="label__prompt">{props.prompt}</div>
      </div>

      <div className="label__right">
        <div className="label__suffix">
          <Icon name="chevron-right" />
        </div>
      </div>
    </Button>
  );

  return (
    <PromptCardStyled {...props}>
      <Card maxHeaderHeight={189} header={promptFragment}>
        <div className="heading">
          <Typography type="heading" level="3">
            {props.heading}
          </Typography>
        </div>
        <div className="body">
          <Typography type="body">{props.children}</Typography>
        </div>
      </Card>
    </PromptCardStyled>
  );
};

export default PromptCard;
