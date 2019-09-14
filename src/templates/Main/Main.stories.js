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
        <Message icon="info">Please fill out this form to continue</Message>
        <InputText name="text" type="text" label="First Name" />
        <InputText name="text" type="text" label="Last Name" />
        <Button
          kind="primary"
          label="Submit"
          onClick={linkTo('Templates/Main', 'Example Landing')}
        />
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
