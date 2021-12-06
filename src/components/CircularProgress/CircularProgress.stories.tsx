import { Story } from '@storybook/react/types-6-0';

import { CircularProgress } from 'components';

import { CircularProgressProps } from './CircularProgress';

export default {
  component: CircularProgress,
  title: 'Components/Progress',
  parameters: {
    componentSubtitle: 'Circular progress is used to show the progress of an operation in a circular bar.',
  },
}

const Template: Story<CircularProgressProps> = () => <CircularProgress percent={70} />

export const Circular = Template.bind({});