import { Typography, IconButton } from 'components';

import MainNavStyled from './MainNav.styles';

export interface MainNavProps {}

const MainNav: React.FC<MainNavProps> = () => {
  return (
    <MainNavStyled id="main-nav">
      <ul className="menu">
        <li className="menu__item">
          <IconButton name="home" label="Home" customIcon>
            <Typography type="menu-item">Home</Typography>
          </IconButton>
        </li>
      </ul>
    </MainNavStyled>
  );
};

export default MainNav;
