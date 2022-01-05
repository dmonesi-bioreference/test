import { ReactNode } from 'react';

import { Heading, Typography } from 'components';

import UserHeaderStyled from './UserHeader.styles';

export interface UserHeaderProps {
  title: string;
  name: string;
  avatar?: ReactNode;
}

const UserHeader: React.FC<UserHeaderProps> = (props) => {
  return (
    <UserHeaderStyled>
      {props.avatar}
      <div>
        <div className='user-header--title'>
          <Typography type="label" color="minor" labelType="display">
            {props.title}
          </Typography>
        </div>
        <Heading level="5">
          {props.name}
        </Heading>
      </div>
    </UserHeaderStyled>
  );
};

export default UserHeader;