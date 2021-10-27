import { ReactNode } from 'react';

import PageSectionStyled from './PageSection.styles';

export interface PageSectionProps {
  header: ReactNode;
}

const PageSection: React.FC<PageSectionProps> = (props) => {
  return (
    <PageSectionStyled className="page-section">
      <div>{props.header}</div>
      {props.children}
    </PageSectionStyled>
  );
};

export default PageSection;
