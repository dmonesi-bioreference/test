import styled from 'styled-components';

import { tokens, base, colors } from 'styles';

const FaqCardStyled = styled.div`
  ${base}
  background-color: ${colors.white};
  border-radius: ${tokens.borderRadius};
  box-shadow: ${tokens.shadowXxLarge};
  overflow: hidden;
  width: 100%;

  .faq-card__header {
    background-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.headerText};
    overflow: hidden;
    padding: ${tokens.spacing} ${tokens.spacingXLarge} ${tokens.spacing}
      ${tokens.spacing};
    display: flex;
    gap: ${tokens.spacingSmall};
  }

  .faq-card__header-icon {
    flex: none;
    color: ${({ theme }) => theme.colors.headerText};
  }

  .faq-card__view-all {
    padding-bottom: ${tokens.spacingLarge};
    text-align: center;
  }

  .faq-card__body {
    padding: ${tokens.spacing} ${tokens.spacing} ${tokens.spacingMedium}
      ${tokens.spacing};
  }

  .faq-card__label {
    padding-bottom: ${tokens.spacingLarge};
  }
`;

export default FaqCardStyled;
