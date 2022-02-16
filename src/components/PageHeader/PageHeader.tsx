import { PageSection } from 'components/PageSection';
import { ReturnLink } from 'components/ReturnLink';
import { Typography } from 'components/Typography';

import PageHeaderStyled from './PageHeader.styles';

export interface PageHeaderProps {
  belongsTo: 'homePage' | 'primaryPage' | 'secondaryPage' | 'contentPage';
  description?: string;
  /** If a secondary page, backLink you to override the return link at the top of the page. */
  backLink?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const withDescription = props.description && (
    <Typography type="body" level="7">
      {props.description}
    </Typography>
  );

  return (
    <PageHeaderStyled className={`page-header page-header--${props.belongsTo}`}>
      <PageSection verticalPadding="extraLarge">
        {props.belongsTo === 'secondaryPage' && <ReturnLink />}
        <div className="content">
          <Typography type="heading" level="1">
            {props.children}
          </Typography>
          {withDescription && (
            <div className="description">{withDescription}</div>
          )}
        </div>
      </PageSection>
    </PageHeaderStyled>
  );
};

export default PageHeader;
