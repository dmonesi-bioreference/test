import { useAppTranslation } from 'app/components/Shell';
import { IconButton } from 'components/IconButton';
import { Typography } from 'components/Typography';

import MainNavStyled from './MainNav.styles';

export interface MainNavProps {}

const MainNav: React.FC<MainNavProps> = () => {
  const t = useAppTranslation();
  return (
    <MainNavStyled id="main-nav">
      <ul className="menu">
        <li className="menu__item">
          <IconButton
            href="/"
            encircled
            name="home"
            label={t('sections.mainNav.home.label')}
          >
            <Typography type="menu-item">
              {t('sections.mainNav.home.label')}
            </Typography>
          </IconButton>
        </li>

        <li className="menu__item">
          <IconButton
            name="document-search"
            label={t('sections.mainNav.results.label')}
            href="/results"
            encircled
          >
            <Typography type="menu-item">
              {t('sections.mainNav.results.label')}
            </Typography>
          </IconButton>
        </li>

        <li className="menu__item">
          <IconButton
            name="heart"
            label={t('sections.mainNav.healthProfile.label')}
            href="/health-profile"
            encircled
          >
            <Typography type="menu-item">
              {t('sections.mainNav.healthProfile.label')}
            </Typography>
          </IconButton>
        </li>

        <li className="menu__item">
          <IconButton
            name="book-open"
            label={t('sections.mainNav.resources.label')}
            href="/resources"
            encircled
          >
            <Typography type="menu-item">
              {t('sections.mainNav.resources.label')}
            </Typography>
          </IconButton>
        </li>

        <li className="menu__item">
          <IconButton
            name="cog"
            label={t('sections.mainNav.settings.label')}
            href="/settings"
            encircled
          >
            <Typography type="menu-item">
              {t('sections.mainNav.settings.label')}
            </Typography>
          </IconButton>
        </li>

        <li className="menu__item">
          <IconButton
            name="logout"
            label={t('sections.mainNav.logout.label')}
            href="/api/auth/logout"
            encircled
          >
            <Typography type="menu-item">
              {t('sections.mainNav.logout.label')}
            </Typography>
          </IconButton>
        </li>
      </ul>
    </MainNavStyled>
  );
};

export default MainNav;
