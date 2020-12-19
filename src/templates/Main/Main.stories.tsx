import { linkTo } from '@storybook/addon-links';
import React from 'react';
import Main from '.';
import Button from '../../components/Button';
import Card from '../../components/Card';
import InputText from '../../components/InputText';
import Message from '../../components/Message';

export default {
  title: 'Templates/Main',
};

export const exampleForm = () => (
  <Main>
    <Card title="Register">
      <Message icon="information-outline">Please fill out this form to continue</Message>
      <InputText name="text" type="text" label="First Name" />
      <InputText name="text" type="text" label="Last Name" />
      <Button kind="primary" onClick={linkTo('Templates/Main', 'Example Landing')}>
        Submit
      </Button>
    </Card>
  </Main>
);

export const exampleLanding = () => (
  <Main>
    <Card title="Welcome">
      <Message type="success" icon="checkmark">
        You are now signed in.
      </Message>
    </Card>
  </Main>
);
