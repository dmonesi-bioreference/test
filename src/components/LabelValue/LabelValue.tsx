import React, { FC } from 'react';
import LabelValueStyled from './LabelValue.styles';

interface LabelValueProps {
  label: string;
  orientation?: 'vertical' | 'horizontal';
  reverse?: boolean;
  value: string | React.ReactNode;
}

const LabelValue: FC<LabelValueProps> = ({
  children,
  label,
  orientation = 'vertical',
  reverse,
  value,
}) => (
  <LabelValueStyled data-reverse={reverse} data-orientation={orientation}>
    <dt>{label}</dt>
    <dd>
      {value}
      {children}
    </dd>
  </LabelValueStyled>
);

export default LabelValue;
