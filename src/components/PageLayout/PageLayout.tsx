import { Header } from 'components/Header';

import PageLayoutStyled from './PageLayout.styles';

export interface PageLayoutProps {
  containsCards?: boolean;
  theme?: 'care' | 'community' | 'resources';
}

const PageLayout: React.FC<PageLayoutProps> = (props) => {
  const withCards = props.containsCards ? 'page__content--with-cards' : '';
  return (
    <PageLayoutStyled className={`page-layout--${props.theme}`}>
      <Header />
      <div className={`page__content ${withCards}`}>{props.children}</div>
    </PageLayoutStyled>
  );
};

export default PageLayout;
