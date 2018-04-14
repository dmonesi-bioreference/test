import React, { Component } from 'react';
import { Button, InputText, Message, Card } from '@zolk/react-ui-starter-kit';

class App extends Component {
  render() {
    return (
      <div>
      <Message text="Please fill out this form to continue" icon="info" />
        <Card title="Register">
          <InputText name="text" type="text" label="First Name"/>
          <InputText name="text" type="text" label="Last Name"/>
          <Button type="primary" label="Submit" />
        </Card>
      </div>
    );
  }
}

export default App;
