import { Icon, Logo, Button } from 'components';

import HeaderStyled from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Button kind="image" href="/">
        <Logo type="color" width={130} />
      </Button>
      <Icon name="menu" kind="heroicon" size="large" />
    </HeaderStyled>
  );
};

export default Header;
