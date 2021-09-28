import { Typography } from 'components';

import InputHelperStyled from './InputHelper.styles';

export interface InputHelperProps {
  helperText: string;
  toolTip?: React.ReactNode;
}

const InputHelper: React.FC<InputHelperProps> = (props) => {
  return (
    <InputHelperStyled>
      <div className="input__helper--text">
        <Typography type="helper-text" color="minor">
          {props.helperText}
        </Typography>
      </div>
      {props.toolTip}
    </InputHelperStyled>
  );
};

export default InputHelper;
