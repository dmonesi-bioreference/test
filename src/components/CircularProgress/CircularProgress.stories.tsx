import { Story } from '@storybook/react/types-6-0';
import { remToPx } from 'polished';

import { CircularProgress } from 'components/CircularProgress';
import { colors, tokens } from 'styles';

import { CircularProgressProps } from './CircularProgress';

export default {
  component: CircularProgress,
  title: 'Components/Progress',
  parameters: {
    componentSubtitle:
      'Circular progress is used to show the progress of an operation in a circular bar.',
  },
};

const Template: Story<CircularProgressProps> = () => (
  <CircularProgress percent={70} />
);

export const Primary = Template.bind({});

Primary.args = {
  radius: parseInt(remToPx(tokens.spacing), 10) * 2.3,
  strokeWidth: parseInt(remToPx(tokens.spacing), 10) * 1.6,
  withInsetShadow: true,
  strokePadding: parseInt(remToPx(tokens.spacingXxSmall), 10),
  strokePaddingColor: colors.black,
};
