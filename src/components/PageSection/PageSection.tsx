import PageSectionStyled from './PageSection.styles';

export interface PageSectionProps {
  header: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = (props) => {
  return (
    <PageSectionStyled className="page-section">
      <header>{props.header}</header>
      {props.children}
    </PageSectionStyled>
  );
};

export default PageSection;
