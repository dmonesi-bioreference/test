import { Button, Icon } from 'components';
import { Typography } from 'components/Typography';

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
    <Typography type="body" level="7">
      {props.description}
    </Typography>
  ) : null;
  return (
    <PageHeaderStyled className={`page-header page-header--${props.belongsTo}`}>
      <div className="content">
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
        {withDescription && (
          <div className="description">{withDescription}</div>
        )}
      </div>
    </PageHeaderStyled>
  );
};

export default PageHeader;
