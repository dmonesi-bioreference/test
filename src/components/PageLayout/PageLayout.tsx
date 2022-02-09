import { ThemeProvider } from 'styled-components';

import { PatientBanner } from 'app/components';
import { Footer } from 'app/components/Footer';
import { Header } from 'components/Header';
import { PageBorder } from 'components/PageBorder';
import { PageHeader } from 'components/PageHeader';
import GlobalStyle from 'styles/global';
import { getTheme } from 'styles/themes';

import PageLayoutStyled from './PageLayout.styles';

export interface PageLayoutProps {
  kind?: 'preLogin' | 'home' | 'primary' | 'secondary' | 'content';
  containsCards?: boolean;
  isWithoutFooter?: boolean;
  isLoading?: boolean;
  hasPatientBanner?: boolean;
  description?: string;
  title?: string;
  theme?: Themes;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  kind = 'primary',
  theme = 'defaultTheme',
  isWithoutFooter = false,
  ...props
}) => {
  const withCards = props.containsCards ? '--with-cards' : '';
  const withHeader = props.title ? (
    <>
      <PageHeader belongsTo={`${kind}Page`} description={props.description}>
        {props.title}
      </PageHeader>
    </>
  ) : null;
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <PageLayoutStyled className={`page-layout--${theme}`}>
        <GlobalStyle />
        <Header />
        {props.hasPatientBanner && <PatientBanner />}
        <PageBorder loading={props.isLoading ? 'loading' : 'loaded'} />
        {withHeader}
        <main
          className={`page-layout__content page-layout__content${withCards} page-layout__content--${kind}`}
        >
          {props.children}
        </main>
        {!isWithoutFooter && <Footer />}
      </PageLayoutStyled>
    </ThemeProvider>
  );
};

export default PageLayout;
