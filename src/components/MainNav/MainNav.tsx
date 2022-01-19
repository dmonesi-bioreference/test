import { IconButton, Typography } from 'components';

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
            name="cog"
            label="Settings"
            href="demo/settings"
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
