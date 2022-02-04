import { motion } from 'framer-motion';

import { useAppTranslation } from 'app/components/Shell';
import { IconButton } from 'components/IconButton';
import { Typography } from 'components/Typography';

import MainNavStyled from './MainNav.styles';

export interface MainNavProps {}

const MainNav: React.FC<MainNavProps> = () => {
  const t = useAppTranslation();
  return (
    <MainNavStyled id="main-nav">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="menu"
      >
        <li className="menu__item home">
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

        <li className="menu__item results">
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

        <li className="menu__item health-profile">
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

        <li className="menu__item resources">
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

        <li className="menu__item settings">
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

        <li className="menu__item logout">
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
      </motion.ul>
    </MainNavStyled>
  );
};

export default MainNav;
