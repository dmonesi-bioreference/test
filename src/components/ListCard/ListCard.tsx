import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Icon } from 'components/Icon';
import HeroiconName from 'components/Icon/heroicon';
import { List } from 'components/List';
import { Typography } from 'components/Typography';

import ListCardStyled from './ListCard.styles';

export interface ListCardProps {
  iconName: HeroiconName;
  title: string;
}

const ListCard: React.FC<ListCardProps> = (props) => {
  return (
    <ListCardStyled>
      <Card
        header={listCardHeader(<Icon name={props.iconName} />, props.title)}
      >
        <List kind="divided">{props.children}</List>
      </Card>
    </ListCardStyled>
  );
};

const listCardHeader = (icon, title) => {
  return (
    <div className="list-card__header">
      <div className="list-card__heading">
        {icon}
        <Typography type="heading" level="3">
          {title}
        </Typography>
      </div>
      <Button kind="link-small" color="default">
        Edit
      </Button>
    </div>
  );
};

export default ListCard;
