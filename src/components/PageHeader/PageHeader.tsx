import { Button, Icon, Typography } from 'components';

import PageHeaderStyled from './PageHeader.styles';

export interface PageHeaderProps {
  belongsTo:
    | 'preLoginPage'
    | 'homePage'
    | 'primaryPage'
    | 'secondaryPage'
    | 'contentPage';
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const withDescription = props.description ? (
    <Typography type="heading" level="7">
      {props.description}
    </Typography>
  ) : null;
  return (
    <PageHeaderStyled className={`page-header page-header--${props.belongsTo}`}>
      {props.belongsTo === 'secondaryPage' ? (
        <Button
          kind="link-small"
          prefix={<Icon name="chevron-left" style="solid" />}
        >
          Return
        </Button>
      ) : null}
      <Typography type="heading" level="1">
        {props.children}
      </Typography>
      {withDescription}
    </PageHeaderStyled>
  );
};

export default PageHeader;
