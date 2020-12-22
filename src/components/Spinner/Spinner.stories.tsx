import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Spinner, { SpinnerProps } from './Spinner';

export default {
  component: Spinner,
  title: 'Components/Spinner',
  parameters: {
    componentSubtitle:
      'Spinners are used to show the progress of an indeterminate operation.',
  },
};

const Template: Story<SpinnerProps> = () => <Spinner />;

export const Primary = Template.bind({});

Primary.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Sizing: Story = () => (
  <>
    <span style={{ fontSize: '1.5rem' }}>
      <Spinner />
    </span>
    <span style={{ fontSize: '2rem' }}>
      <Spinner />
    </span>
    <span style={{ fontSize: '3rem' }}>
      <Spinner />
    </span>
  </>
);

Sizing.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    storyDescription:
      'Spinners are sized relative to the current font size. To change their size, set the `font-size` style property on a parent element.',
  },
};
