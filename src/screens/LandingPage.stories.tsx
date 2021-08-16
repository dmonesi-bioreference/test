import { Shell } from 'components/Shell';

import { Main } from './LandingPage';

export default {
  component: Main,
  title: 'Templates/Main',
};

export const LandingPage = () => (
  <Shell>
    <Main />
  </Shell>
);
