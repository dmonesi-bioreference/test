import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Icon from '../Icon';
import Button, { ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
};

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});

Primary.args = {
  onClick: action('button clicked'),
  kind: 'default',
  size: 'medium',
};

export const Sizes: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </div>
);

export const Kinds: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
    <Button kind="default">Default</Button>
    <Button kind="primary">Primary</Button>
    <Button kind="success">Success</Button>
    <Button kind="info">Info</Button>
    <Button kind="warning">Warning</Button>
    <Button kind="danger">Danger</Button>
    <Button kind="text">Text</Button>
  </div>
);

export const asLink = Template.bind({});

asLink.args = {
  href: 'https://example.com',
};

export const withPrefixIcon = Template.bind({});

withPrefixIcon.args = {
  prefix: <Icon name="download" />,
  href: 'https://example.com',
};

export const withSuffixIcon = Template.bind({});

withSuffixIcon.args = {
  suffix: <Icon name="arrow-right" />,
  href: 'https://example.com',
};
