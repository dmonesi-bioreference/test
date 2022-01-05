import { Header } from 'components/Header';
import { GlobalStyle } from 'index';

import PageLayoutStyled from './PageLayout.styles';

export interface PageLayoutProps {
  containsCards?: boolean;
  theme?: 'care' | 'community' | 'resources';
}

const PageLayout: React.FC<PageLayoutProps> = ({
  containsCards,
  children,
  ...props
}) => {
  const withCards = containsCards ? 'page__content--with-cards' : '';
  return (
    <PageLayoutStyled className={`page-layout--${props.theme}`}>
      <GlobalStyle />
      <Header />
      <div className={`page__content ${withCards}`}>{children}</div>
    </PageLayoutStyled>
  );
};

export default PageLayout;
