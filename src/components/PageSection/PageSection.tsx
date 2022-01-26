import PageSectionStyled from './PageSection.styles';

export interface PageSectionProps {
  header?: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = (props) => {
  return (
    <PageSectionStyled className="page-section">
      {props.header && <header>{props.header}</header>}
      {props.children}
    </PageSectionStyled>
  );
};

export default PageSection;
