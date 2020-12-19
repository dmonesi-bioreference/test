import { action } from '@storybook/addon-actions';
import React from 'react';
import Button from '.';

export default {
  component: Button,
  title: 'Components/Button',
};

export const primary = () => <Button kind="primary">Primary Button</Button>;

export const PrimaryOnClick = () => (
  <Button kind="primary" onClick={action('button clicked')}>
    Primary Button
  </Button>
);

export const PrimaryHref = () => (
  <Button kind="primary" href="https://example.com">
    Primary Button
  </Button>
);

export const PrimaryRouterLink = () => (
  <Button kind="primary" linkTo="#">
    Primary Button
  </Button>
);

export const primaryWithIcon = () => (
  <Button kind="primary" icon="checkmark" onClick={action('button-click')}>
    Primary Icon Button
  </Button>
);

export const PrimaryWithIconOnRight = () => (
  <Button kind="primary" icon="arrow-right" iconPosition="end">
    Primary Icon Button
  </Button>
);

export const mediumButton = () => (
  <Button kind="primary" size="medium" onClick={action('button-click')}>
    Medium Primary Button
  </Button>
);

export const smallButton = () => (
  <Button kind="primary" size="small" onClick={action('button-click')}>
    Small Primary Button
  </Button>
);

export const secondary = () => (
  <Button kind="secondary" onClick={action('button-click')}>
    Secondary Button
  </Button>
);

export const black = () => (
  <Button kind="black" onClick={action('button-click')}>
    Black Button
  </Button>
);

export const danger = () => (
  <Button kind="danger" onClick={action('button-click')}>
    Danger Button
  </Button>
);

export const disabledStory = () => (
  <Button disabled={true} onClick={action('button-click')}>
    Disabled Button
  </Button>
);

export const text = () => (
  <Button kind="text" onClick={action('button-click')}>
    Text Button
  </Button>
);

export const textDanger = () => (
  <Button kind="text-danger" onClick={action('button-click')}>
    Danger Text Button
  </Button>
);

export const textWithIcon = () => (
  <Button kind="text" icon="duplicate" onClick={action('button-click')}>
    Text Button
  </Button>
);
