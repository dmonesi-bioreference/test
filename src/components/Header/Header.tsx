import { useState } from 'react';
import { useRef } from 'react';

import { MainNav } from 'app/components/MainNav';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Logo } from 'components/Logo';
import { useOnClickOutside } from 'components/hooks';

import HeaderStyled from './Header.styles';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <HeaderStyled ref={ref}>
      <header>
        <Button kind="image" href="/">
          <Logo width={130} />
        </Button>
        <button
          type="button"
          className="main-nav__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
          aria-haspopup="true"
          // references id of MainNav component
          aria-controls="main-nav"
        >
          <Icon name="menu" kind="heroicon" size="large" />
        </button>
      </header>
      {isOpen && <MainNav />}
    </HeaderStyled>
  );
};

export default Header;
