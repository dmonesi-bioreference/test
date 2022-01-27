import PageSectionStyled from './PageSection.styles';

export interface PageSectionProps {
  header?: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = (props) => {
  return (
    <PageSectionStyled className="page-section">
      {props.header && <header>{props.header}</header>}
      <div className="page-section__content">{props.children}</div>
    </PageSectionStyled>
  );
};

export default PageSection;
