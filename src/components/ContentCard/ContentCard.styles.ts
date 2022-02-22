import { darken, lighten } from 'polished';
import styled from 'styled-components';

import TypographyStyled from 'components/Typography/Typography.styles';
import { base, tokens } from 'styles';

import { ContentCardProps } from './ContentCard';

const ContentCardStyled = styled.div<ContentCardProps>`
  ${base}
  ${({ variant, href }) =>
    variant === 'link' && href ? 'cursor: pointer;' : ''}

  ${({ variant, href }) =>
    variant === 'link' && href ? 'cursor: pointer;' : ''}

  .card__content {
    display: flex;
    flex-direction: column;
    ${(props) => props.footer && `padding-bottom: 0;`}
  }

  .label {
    margin-bottom: ${tokens.spacingXSmall};
  }

  .label--button {
    * {
      display: flex;
      align-items: center;
      gap: ${tokens.spacing};
    }

    width: 100%;
    grid-template-columns: max-content 1fr max-content;
  }

  .label--button,
  .label--button svg {
    color: ${({ theme }) =>
      theme?.colors?.headerText || tokens.colorPrimaryText};
    transition: all ${tokens.transitionMedium} ease-in-out;
  }

  .label--button span {
    color: ${(props) =>
      props.variant === 'link'
        ? lighten(
            0.2,
            props.theme?.colors?.headerText || tokens.colorPrimaryText
          )
        : props.theme?.colors?.headerText || tokens.colorPrimaryText};
    transition: all ${tokens.transitionMedium} ease-in-out;
  }

  .label--button:hover:not(.button--disabled) {
    text-decoration: none;

    * {
      color: ${(props) =>
        darken(
          0.2,
          props.theme?.colors?.headerText || tokens.colorPrimaryText
        )};
    }
  }

  .heading {
    margin-bottom: ${tokens.spacing};

    ${TypographyStyled} {
      color: ${(props) =>
        props.theme?.colors?.headerText || tokens.colorPrimaryText};
    }
  }
`;

export default ContentCardStyled;
