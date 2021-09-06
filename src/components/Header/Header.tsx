import { Icon, AppLink, Logo } from 'components';

import HeaderStyled from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <AppLink href="/">
        <Logo type="color" width={130} />
      </AppLink>
      <Icon name="menu" kind="heroicon" size="large" />
    </HeaderStyled>
  );
};

export default Header;
