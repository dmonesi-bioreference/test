import { Typography } from 'components/Typography';

import PageSectionStyled from './PageSection.styles';

export interface PageSectionProps {
  title?: string;
}

const PageSection: React.FC<PageSectionProps> = (props) => {
  return (
    <PageSectionStyled className="page-section">
      {props.title && (
        <header>
          <Typography type="heading" level="2">
            {props.title}
          </Typography>
        </header>
      )}
      <div className="page-section__content">{props.children}</div>
    </PageSectionStyled>
  );
};

export default PageSection;
