import { Header } from 'components/Header';
import GlobalStyle from 'styles/global';

import PageLayoutStyled from './PageLayout.styles';

export interface PageLayoutProps {
  /** Set to true to hide navigation menu and center logo within header. */
  isWithoutNav?: boolean;
  /** Adds optional headers such as a PageHeader, PatientBanner or PageBorder. */
  additionalHeaders?: React.ReactNode;
  /** Set to true to hide footer. */
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
