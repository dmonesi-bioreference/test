import { linkTo } from '@storybook/addon-links';

import { Button, Card, Input, Message } from 'components';

import Main from '.';

export default {
  title: 'Templates/Main',
};

export const exampleForm = () => (
  <Main>
    <Card title="Register">
      <Message type="info">Please fill out this form to continue</Message>
      <Input name="text" type="text" label="First Name" />
      <Input name="text" type="text" label="Last Name" />
      <Button
        kind="primary"
        onClick={linkTo('Templates/Main', 'Example Landing')}
      >
        Submit
      </Button>
    </Card>
  </Main>
);

export const exampleLanding = () => (
  <Main>
    <Card title="Welcome">
      <Message type="success">You are now signed in.</Message>
    </Card>
  </Main>
);
