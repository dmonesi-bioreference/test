import { IconButton } from 'components/IconButton';
import { Typography } from 'components/Typography';

import MainNavStyled from './MainNav.styles';

export interface MainNavProps {}

const MainNav: React.FC<MainNavProps> = () => {
  return (
    <MainNavStyled id="main-nav">
      <ul className="menu">
        <li className="menu__item" key="1">
          <IconButton name="home" label="Home" href="/demo" encircled>
            <Typography type="menu-item">Home</Typography>
          </IconButton>
        </li>

        <li className="menu__item" key="2">
          <IconButton
            name="document-search"
            label="My Results"
            href="/results"
            encircled
          >
            <Typography type="menu-item">My Results</Typography>
          </IconButton>
        </li>

        <li className="menu__item" key="3">
          <IconButton
            name="heart"
            label="Health Profile"
            href="/health-profile"
            encircled
          >
            <Typography type="menu-item">Health Profile</Typography>
          </IconButton>
        </li>

        <li className="menu__item" key="4">
          <IconButton
            name="book-open"
            label="Resources"
            href="/resources"
            encircled
          >
            <Typography type="menu-item">Resources</Typography>
          </IconButton>
        </li>

        <li className="menu__item" key="5">
          <IconButton name="cog" label="Settings" href="/settings" encircled>
            <Typography type="menu-item">Settings</Typography>
          </IconButton>
        </li>

        <li className="menu__item" key="5">
          <IconButton
            name="logout"
            label="Settings"
            href="/api/auth/logout"
            encircled
          >
            <Typography type="menu-item">Log Out</Typography>
          </IconButton>
        </li>
      </ul>
    </MainNavStyled>
  );
};

export default MainNav;
