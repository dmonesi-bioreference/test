import styled from 'styled-components';


import { base, tokens, colors } from 'styles';

const AudioStyled = styled.div`
  ${base}
  background-color: ${colors.slatePurple[100]};
  border-radius: ${tokens.borderRadius};
  box-shadow: ${tokens.shadowXxLarge};
  width: 100%;

  .audio__header {
    padding: ${tokens.spacingLarge};
  }

  .audio__content {
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0 ${tokens.spacingLarge} ${tokens.spacingLarge};
  }

  .audio__content > * :not(:last-child) {
    margin-bottom: ${tokens.spacing};
  }

  .audio__description-container {
    display: flex;
    width: 100%;
  }

  .audio__description-container > :first-child {
    margin-right: ${tokens.spacing};
  }

  .audio__player {
    box-shadow: ${tokens.shadowXxLarge};
    width: 100%;
  }

  .audio__transcript {
    background-color: ${colors.white};
    padding: ${tokens.spacingXLarge} ${tokens.spacingLarge};
  }

  .audio__transcript--hidden {
    display: none;
  }

  .audio__transcript > * :not(:last-child) {
    margin-bottom: ${tokens.spacingMedium};
  }
`;

export default AudioStyled;