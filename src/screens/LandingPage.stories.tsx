import { Shell } from 'app/components/Shell';

import { LandingPage } from './LandingPage';

export default {
  component: LandingPage,
  title: 'Templates/Main',
};

export const LandingPageScreen = () => (
  <Shell>
    <LandingPage />
  </Shell>
);
