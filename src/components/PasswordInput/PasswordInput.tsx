import { useState } from "react";

import { Button, Input, Icon } from "components";

export interface PasswordInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown((latestPasswordShownValue) => !latestPasswordShownValue);
  };
  return (
    <Input
      type={passwordShown ? 'text' : 'password'}
      label={props.label}
      name={props.name}
      placeholder={props.placeholder}
      suffix={
        <Button
          kind="link-small"
          onClick={togglePasswordVisibility}
        >
          {passwordShown ? 'Hide' : 'Show'}
        </Button>
      }
      prefix={<Icon name="lock-closed" color="primary" />}
    />
  )
}


export default PasswordInput;
