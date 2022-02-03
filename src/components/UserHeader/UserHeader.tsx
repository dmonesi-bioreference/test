import { ReactNode } from 'react';

import { Typography } from 'components/Typography';
import { useStyleTheme } from 'styles';

import UserHeaderStyled from './UserHeader.styles';

export interface UserHeaderProps {
  title: string;
  name: string;
  avatar?: ReactNode;
  variant?: 'default' | 'patient';
  titleColor?: string;
}

const UserHeader: React.FC<UserHeaderProps> = (props) => {
  const theme = useStyleTheme();
  const patientHeaderBackground = (
    <div className="background-panel">
      <svg viewBox="0 0 351 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="115.5"
          cy="-84.5"
          r="235.5"
          fill={theme.colors.foreground}
        />
      </svg>
    </div>
  );

  return (
    <UserHeaderStyled {...props}>
      {props.variant == 'patient' ? patientHeaderBackground : ''}
      {props.avatar}
      <div className="content">
        <div className="user-header__title">
          <Typography type="label" labelType="display">
            {props.title}
          </Typography>
        </div>
        <Typography type="body" level="5">
          {props.name}
        </Typography>
      </div>
    </UserHeaderStyled>
  );
};

export default UserHeader;
