import { useAppTranslation } from 'app';
import { Typography } from 'components/Typography';

import DisplayFieldStyled from './DisplayField.styles';

export interface DisplayFieldProps {
  label: string;
}

export const DisplayField: React.FC<DisplayFieldProps> = (props) => {
  const t = useAppTranslation();
  const data = props.children
    ? props.children
    : t('components.displayField.defaultValue');
  return (
    <DisplayFieldStyled>
      <Typography type="label" labelType="data">
        {props.label}
      </Typography>
      <Typography type="heading" level="7">
        {data}
      </Typography>
    </DisplayFieldStyled>
  );
};
