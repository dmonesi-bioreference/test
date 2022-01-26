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
            href="/demo/results"
            encircled
          >
            <Typography type="menu-item">My Results</Typography>
          </IconButton>
        </li>

        <li className="menu__item" key="3">
          <IconButton
            name="heart"
            label="Health Profile"
            href="/demo/health-profile"
            encircled
          >
            <Typography type="menu-item">Health Profile</Typography>
          </IconButton>
        </li>

        <li className="menu__item" key="4">
          <IconButton
            name="book-open"
            label="Resources"
            href="/demo/resources"
            encircled
          >
            <Typography type="menu-item">Resources</Typography>
          </IconButton>
        </li>

        <li className="menu__item" key="5">
          <IconButton
            name="cog"
            label="Settings"
            href="/demo/settings"
            encircled
          >
            <Typography type="menu-item">Settings</Typography>
          </IconButton>
        </li>
      </ul>
    </MainNavStyled>
  );
};

export default MainNav;
