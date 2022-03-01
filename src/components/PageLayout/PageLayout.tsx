import { Header } from 'components/Header';
import GlobalStyle from 'styles/global';

import PageLayoutStyled from './PageLayout.styles';

export interface PageLayoutProps {
  isWithoutNav?: boolean;
  additionalHeaders?: React.ReactNode;
  footer?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = (props) => {
  return (
    <PageLayoutStyled>
      <GlobalStyle />
      <Header
        withoutMenu={props.isWithoutNav}
        alignment={props.isWithoutNav ? 'center' : 'default'}
      />
      {props.additionalHeaders}

      <main>{props.children}</main>

      {props.footer}
    </PageLayoutStyled>
  );
};

export default PageLayout;
