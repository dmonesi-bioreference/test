import { Footer } from 'app/components/Footer';
import { Header } from 'components/Header';
import { PageHeader } from 'components/PageHeader';
import { GlobalStyle } from 'index';

import PageLayoutStyled from './PageLayout.styles';

export interface PageLayoutProps {
  kind?: 'preLogin' | 'home' | 'primary' | 'secondary' | 'content';
  containsCards?: boolean;
  customHeader?: React.ReactNode;
  description?: string;
  title?: string;
  theme?: 'care' | 'community' | 'resources';
}

const PageLayout: React.FC<PageLayoutProps> = ({
  containsCards,
  children,
  ...props
}) => {
  const belongsTo = props.kind || 'primary';
  const withCards = containsCards ? '--with-cards' : '';
  const withHeader = props.title ? (
    <PageHeader belongsTo={`${belongsTo}Page`} description={props.description}>
      {props.title}
    </PageHeader>
  ) : null;
  return (
    <PageLayoutStyled className={`page-layout--${props.theme}`}>
      <GlobalStyle />
      <Header />
      {props.customHeader && (
        <div className="page-layout__custom-header">{props.customHeader}</div>
      )}
      {withHeader}
      <main
        className={`page-layout__content page-layout__content${withCards} page-layout__content--${belongsTo}`}
      >
        {children}
      </main>
      <Footer />
    </PageLayoutStyled>
  );
};

export default PageLayout;
