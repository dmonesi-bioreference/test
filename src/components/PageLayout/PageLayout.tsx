import { ThemeProvider } from 'styled-components';

import { Footer } from 'app/components/Footer';
import { Header } from 'components/Header';
import { PageBorder } from 'components/PageBorder';
import { PageHeader } from 'components/PageHeader';
import { GlobalStyle } from 'index';
import { getTheme } from 'styles/themes';

import PageLayoutStyled from './PageLayout.styles';

export interface PageLayoutProps {
  kind?: 'preLogin' | 'home' | 'primary' | 'secondary' | 'content';
  containsCards?: boolean;
  customHeader?: React.ReactNode;
  description?: string;
  title?: string;
  theme?: Themes;
  loading?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  theme = 'defaultTheme',
  ...props
}) => {
  const belongsTo = props.kind || 'primary';
  const withCards = props.containsCards ? '--with-cards' : '';
  const withHeader = props.title ? (
    <>
      <PageBorder loading={props.loading ? 'loading' : 'loaded'} />
      <PageHeader
        belongsTo={`${belongsTo}Page`}
        description={props.description}
      >
        {props.title}
      </PageHeader>
    </>
  ) : null;
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <PageLayoutStyled className={`page-layout--${theme}`}>
        <GlobalStyle />
        <Header />
        {props.customHeader && <div>{props.customHeader}</div>}
        {withHeader}
        <main
          className={`page-layout__content page-layout__content${withCards} page-layout__content--${belongsTo}`}
        >
          {props.children}
        </main>
        <Footer />
      </PageLayoutStyled>
    </ThemeProvider>
  );
};

export default PageLayout;
