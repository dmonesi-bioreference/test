import { Header } from '../Header';

import PageLayoutStyled from './PageLayout.styles';

const PageLayout: React.FC = (props) => {
  return (
    <PageLayoutStyled>
      <Header />
      <div className="page__content">{props.children}</div>
    </PageLayoutStyled>
  );
};

export default PageLayout;
