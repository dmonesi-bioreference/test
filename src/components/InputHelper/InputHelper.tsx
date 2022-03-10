import { Typography } from 'components/Typography';

import InputHelperStyled from './InputHelper.styles';

export interface InputHelperProps {
  /** Information about an input field. */
  helperText: string;
  /** Allows for a ToolTip component to be displayed alongside the input field. */
  toolTip?: React.ReactNode;
}

const InputHelper: React.FC<InputHelperProps> = (props) => {
  return (
    <InputHelperStyled>
      <Typography type="helper-text" color="minor">
        {props.helperText}
      </Typography>
      {props.toolTip}
    </InputHelperStyled>
  );
};

export default InputHelper;
