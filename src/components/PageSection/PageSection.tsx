import { ReactNode } from 'react';

import PageSectionStyled from './PageSection.styles';

export interface PageSectionProps {
  header: ReactNode;
}

const PageSection: React.FC<PageSectionProps> = (props) => {
  return (
    <PageSectionStyled className="page-section">
      <div className="page-section__header">{props.header}</div>
      {props.children}
    </PageSectionStyled>
  );
};

export default PageSection;
