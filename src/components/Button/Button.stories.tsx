import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react/types-6-0';

import { Icon } from 'components/Icon';

import { Logo } from '../Logo';

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
  <div style={{ width: 150 }}>
    <Button {...args}>Button</Button>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  onClick: action('button clicked'),
  kind: 'default',
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
    <Button kind="image">
      <Logo type="color" width={130} />
    </Button>
  </div>
);

Kinds.parameters = {
  docs: {
    storyDescription: "Use the `kind` prop to set the button's type.",
  },
};

export const Links: Story = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1rem',
    }}
  >
    <Button kind="link-large" href="https://example.com">
      Large
    </Button>
    <Button kind="link-medium" href="https://example.com">
      Medium
    </Button>
    <Button kind="link-small" href="https://example.com">
      Small
    </Button>
    <Button kind="danger" href="https://example.com" target="_blank">
      Opens in a new tab
    </Button>
  </div>
);

Links.parameters = {
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
