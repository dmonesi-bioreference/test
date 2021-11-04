import { useState } from 'react';

import { Button } from 'components/Button';
import { InputBaseProps } from 'components/FormControl';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';

const PasswordInput: React.FC<InputBaseProps> = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown((latestPasswordShownValue) => !latestPasswordShownValue);
  };
  return (
    <Input
      {...props}
      type={passwordShown ? 'text' : 'password'}
      label={props.label}
      name={props.name}
      placeholder={props.placeholder}
      suffix={
        <Button kind="link-small" onClick={togglePasswordVisibility}>
          {passwordShown ? 'Hide' : 'Show'}
        </Button>
      }
      prefix={<Icon name="lock-closed" color="primary" />}
    />
  );
};

export default PasswordInput;
