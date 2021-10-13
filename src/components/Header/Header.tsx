import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Logo } from 'components/Logo';

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
