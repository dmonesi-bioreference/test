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
  editable?: boolean;
}

const ListCard: React.FC<ListCardProps> = (props) => {
  return (
    <ListCardStyled>
      <Card
        header={
          <div className="list-card__header">
            <div className="list-card__heading">
              <Icon name={props.iconName} />
              <Typography type="heading" level="3">
                {props.title}
              </Typography>
            </div>
            {props.editable ? (
              <Button kind="link-small" color="default">
                Edit
              </Button>
            ) : null}
          </div>
        }
      >
        <List kind="divided">{props.children}</List>
      </Card>
    </ListCardStyled>
  );
};

export default ListCard;
