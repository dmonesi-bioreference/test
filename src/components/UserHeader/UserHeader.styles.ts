import styled from 'styled-components';

import AvatarStyled from 'components/Avatar/Avatar.styles';
import { tokens } from 'styles';

const UserHeaderStyled = styled.div`
  display: inline-flex;
  margin-bottom: ${tokens.spacingXSmall};

  .user-header--title {
    margin-bottom: ${tokens.spacingXxSmall};
  }

  ${AvatarStyled} {
    padding-right: ${tokens.spacing};
  }
`;

export default UserHeaderStyled;
