import React from 'react'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import Main from '.'
import Message from '../../components/Message'
import Card from '../../components/Card'
import InputText from '../../components/InputText'
import Button from '../../components/Button'

storiesOf('Templates/Main', module)
  .add('Example Form', () => (
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
  ))
  .add('Example Landing', () => (
    <Main>
      <Card title="Welcome">
        <Message type="success" icon="checkmark">
          You are now signed in.
        </Message>
      </Card>
    </Main>
  ))
