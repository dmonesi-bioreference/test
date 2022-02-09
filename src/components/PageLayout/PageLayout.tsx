import { ThemeProvider } from 'styled-components';

import { Header } from 'components/Header';
import { PageBorder } from 'components/PageBorder';
import { PageHeader } from 'components/PageHeader';
import GlobalStyle from 'styles/global';
import { getTheme } from 'styles/themes';

import PageLayoutStyled from './PageLayout.styles';

export interface PageLayoutProps {
  kind?: 'preLogin' | 'home' | 'primary' | 'secondary' | 'content';
  containsCards?: boolean;
  footer?: React.ReactNode;
  banner?: React.ReactNode;
  isLoading?: boolean;
  description?: string;
  title?: string;
  theme?: Themes;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  kind = 'primary',
  theme = 'defaultTheme',
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
        {props.banner}
        <PageBorder loading={props.isLoading ? 'loading' : 'loaded'} />
        {withHeader}
        <main
          className={`page-layout__content page-layout__content${withCards} page-layout__content--${kind}`}
        >
          {props.children}
        </main>
        {props.footer}
      </PageLayoutStyled>
    </ThemeProvider>
  );
};

export default PageLayout;
