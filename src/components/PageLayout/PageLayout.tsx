import { Header } from 'components/Header';

import PageLayoutStyled from './PageLayout.styles';

export interface PageLayoutProps {
  containsCards?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = (props) => {
  const withCards = props.containsCards ? 'page__content--with-cards' : '';
  return (
    <PageLayoutStyled>
      <Header />
      <div className={`page__content ${withCards}`}>{props.children}</div>
    </PageLayoutStyled>
  );
};

export default PageLayout;
