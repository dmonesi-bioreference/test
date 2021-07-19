import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';
import Icon from '../Icon/Icon';
import Button, { ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  parameters: {
    componentSubtitle:
      'Buttons represent actions that are available to the user.',
  },
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

Sizes.parameters = {
  docs: {
    storyDescription: "Use the `size` prop to change a button's size.",
  },
};

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

Kinds.parameters = {
  docs: {
    storyDescription: "Use the `kind` prop to set the button's type.",
  },
};

export const asLink = Template.bind({});

asLink.args = {
  href: 'https://example.com',
};

asLink.parameters = {
  docs: {
    storyDescription:
      'Setting the `href` prop will allow the component to render an `<a>` under the hood. This enables use of the `download` and `target` props.',
  },
};

export const withPrefixIcon = Template.bind({});

withPrefixIcon.args = {
  prefix: <Icon name="download" />,
  href: 'https://example.com',
};

withPrefixIcon.parameters = {
  docs: {
    storyDescription: 'Use the `prefix` and `suffix` props to add an icon.',
  },
};

export const withSuffixIcon = Template.bind({});

withSuffixIcon.args = {
  suffix: <Icon name="arrow-right" />,
  href: 'https://example.com',
};
