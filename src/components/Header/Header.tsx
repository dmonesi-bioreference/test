import GeneDxLogo from 'assets/images/png/Logo.png';
import { Icon } from 'components/Icon';

import HeaderStyled from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <a href="?path=/story/templates-main--waiting-landing-page">
        <img src={GeneDxLogo} alt="GeneDx Logo" />
      </a>
      <Icon name="menu" kind="heroicon" size="large" />
    </HeaderStyled>
  );
};

export default Header;
