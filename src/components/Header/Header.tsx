import GeneDxLogo from 'assets/images/png/Logo.png';
import { AppImage } from 'components/AppImage';
import { AppLink } from 'components/AppLink';
import { Icon } from 'components/Icon';

import HeaderStyled from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <AppLink href="/">
        <AppImage
          src={GeneDxLogo}
          alt="GeneDx Logo"
          width={90.24}
          height={28.13}
          className="header__logo"
        />
      </AppLink>
      <Icon name="menu" kind="heroicon" size="large" />
    </HeaderStyled>
  );
};

export default Header;
