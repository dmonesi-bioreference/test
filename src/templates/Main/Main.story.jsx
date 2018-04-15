import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Main from '../Main';
import Message from '../../components/Message';
import Card from '../../components/Card';
import InputText from '../../components/InputText';
import Button from '../../components/Button';

storiesOf('Templates/Main', module)
  .add('Example Form', () => (
    <Main>
      <Card title="Register">
        <Message text="Please fill out this form to continue" icon="info" />
        <InputText name="text" type="text" label="First Name" />
        <InputText name="text" type="text" label="Last Name" />
        <Button type="primary" label="Submit" onClick={linkTo('Templates/Main', 'Example Landing')} />
      </Card>
    </Main>
  ))
  .add('Example Landing', () => (
    <Main>
      <Card title="Welcome">
        <Message text="You are now signed in." type="success" icon="checkmark" />
      </Card>
    </Main>
  ));
