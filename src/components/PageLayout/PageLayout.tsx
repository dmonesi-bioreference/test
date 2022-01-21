import { Header, PageHeader } from 'components';
import { GlobalStyle } from 'index';

import PageLayoutStyled from './PageLayout.styles';

export interface PageLayoutProps {
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
  const withCards = containsCards ? 'page__content--with-cards' : '';
  const withHeader = props.title ? (
    <PageHeader description={props.description}>{props.title}</PageHeader>
  ) : null;
  return (
    <PageLayoutStyled className={`page-layout--${props.theme}`}>
      <GlobalStyle />
      <Header />
      <div className="page__custom-header">
        {props.customHeader}
      </div>
      {withHeader}
      <div className={`page__content ${withCards}`}>{children}</div>
    </PageLayoutStyled>
  );
};

export default PageLayout;
