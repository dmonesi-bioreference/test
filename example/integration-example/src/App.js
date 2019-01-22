import React, { Component } from 'react';
import { Button, InputText, Message, Card } from '@zolk/react-ui-starter-kit';

class App extends Component {
  render() {
    return (
      <div>
        <Message icon="info">Please fill out this form to continue</Message>
        <Card title="Register">
          <InputText name="text" type="text" label="First Name" />
          <InputText name="text" type="text" label="Last Name" />
          <Button kind="primary">Submit</Button>
        </Card>
      </div>
    );
  }
}

export default App;
