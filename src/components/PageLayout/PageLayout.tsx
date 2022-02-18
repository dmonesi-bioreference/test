import { ThemeProvider } from 'styled-components';

import { Header } from 'components/Header';
import { PageBorder } from 'components/PageBorder';
import { PageHeader } from 'components/PageHeader';
import GlobalStyle from 'styles/global';
import { getTheme } from 'styles/themes';

import PageLayoutStyled from './PageLayout.styles';

export interface PageLayoutProps {
  containsCards?: boolean;
  footer?: React.ReactNode;
  banner?: React.ReactNode;
  hasReturnLink?: boolean;
  isLoading?: boolean;
  description?: string;
  label?: string;
  title?: string;
  theme?: Themes;
  isWithoutNav?: boolean;
  hasBackgroundEllipse?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  theme = 'defaultTheme',
  ...props
}) => {
  const withCards = props.containsCards ? '--with-cards' : '';
  const withHeader = props.title ? (
    <>
      <PageHeader
        description={props.description}
        label={props.label}
        hasReturnLink={props.hasReturnLink}
        theme={theme}
      >
        {props.title}
      </PageHeader>
    </>
  ) : null;

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <PageLayoutStyled className={`page-layout--${theme}`}>
        <GlobalStyle />
        <div className={'page-layout__background-wrapper'}>
          {props.hasBackgroundEllipse && <figure className="ellipse" />}
        </div>
        <Header
          withoutMenu={props.isWithoutNav}
          alignment={props.isWithoutNav ? 'center' : 'default'}
        />
        {props.banner}
        <PageBorder loading={props.isLoading ? 'loading' : 'loaded'} />
        {withHeader}
        <main
          className={`page-layout__content page-layout__content${withCards}`}
        >
          {props.children}
        </main>
        {props.footer}
      </PageLayoutStyled>
    </ThemeProvider>
  );
};

export default PageLayout;
