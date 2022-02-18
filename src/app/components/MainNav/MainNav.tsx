import { AnimatePresence, motion } from 'framer-motion';

import { useAppTranslation } from 'app/components/Shell';
import { IconButton } from 'components/IconButton';
import { Typography } from 'components/Typography';
import { trackLogoutEvent } from 'tracking';

import MainNavStyled from './MainNav.styles';

export interface MainNavProps {
  isOpen: boolean;
}

const MainNav: React.FC<MainNavProps> = (props) => {
  const t = useAppTranslation();
  return (
    <MainNavStyled id="main-nav">
      <AnimatePresence>
        {props.isOpen && (
          <motion.ul
            initial={{ opacity: 0, scale: 0.9, originX: 1, originY: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.08, ease: 'easeOut' }}
            exit={{ opacity: 0, scale: 0.9 }}
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
                href="/test-results"
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
                href="/account-settings"
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
                onClick={trackLogoutEvent}
              >
                <Typography type="menu-item">
                  {t('sections.mainNav.logout.label')}
                </Typography>
              </IconButton>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </MainNavStyled>
  );
};

export default MainNav;
