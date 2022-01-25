import { Button, Icon, Typography } from 'components';

import ReturnLinkStyled from './ReturnLink.styles';

export interface ReturnLinkProps {
  label: string;
  href: string;
}

const ReturnLink: React.FC<ReturnLinkProps> = (props) => {
  return (
    <ReturnLinkStyled>
      <Button kind="link-small" href={props.href}>
        <div className="return-link__label">
          <Icon
            name="chevron-left"
            size="x-small"
            color="primary"
            style="solid"
          />
          <Typography type="body" color="primary">
            {props.label}
          </Typography>
        </div>
      </Button>
    </ReturnLinkStyled>
  );
};

export default ReturnLink;
