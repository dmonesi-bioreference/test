import styled from 'styled-components';

import AvatarStyled from 'components/Avatar/Avatar.styles';
import TypographyStyled from 'components/Typography/Typography.styles';
import { tokens } from 'styles';

import { UserHeaderProps } from './UserHeader';

const UserHeaderStyled = styled.div<UserHeaderProps>`
  display: inline-flex;
  margin-bottom: ${tokens.spacingXSmall};
  overflow: hidden;
  ${(p) =>
    p.variant == 'patient' &&
    `
    display: flex;
    position: relative;
    margin: 0;
    padding: ${tokens.spacingLarge} ${tokens.spacing};
    `}

  .background-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${(props) =>
      props.backgroundColor || tokens.colorBackgroundDefault};

    svg {
      width: 90%;
      min-height: 100%;
    }
  }

  .user-header__title {
    margin-bottom: ${tokens.spacingXxSmall};

    ${TypographyStyled} {
      color: ${(p) => p.titleColor || tokens.colorPrimary};
    }
  }

  ${AvatarStyled} {
    padding-right: ${tokens.spacing};
  }
`;

export default UserHeaderStyled;
