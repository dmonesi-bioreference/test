import { Typography } from 'components';

import PageHeaderStyled from './PageHeader.styles';

export interface PageHeaderProps {
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const withDescription = props.description ? (
    <Typography type="heading" level="7">
      {props.description}
    </Typography>
  ) : null;
  return (
    <PageHeaderStyled>
      <div className="page-header__content">
        <Typography type="heading" level="1">
          {props.children}
        </Typography>
        {withDescription}
      </div>
    </PageHeaderStyled>
  );
};

export default PageHeader;
