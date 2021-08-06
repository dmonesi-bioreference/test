import GeneDxLogo from 'assets/images/png/Logo.png';
import { Icon } from 'components/Icon';

import HeaderStyled from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <img src={GeneDxLogo} alt="GeneDx Logo" />
      <Icon name="menu" kind="heroicon" size="large" />
    </HeaderStyled>
  );
};

export default Header;
