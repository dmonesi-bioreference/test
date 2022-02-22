import styled from 'styled-components';

import AudioCardStyled from 'app/components/ContentElements/AudioCard.styles';
import AccordionStyled, { AccordionBodyStyled, AccordionHeaderStyled } from 'components/Accordion/Accordion.styles';
import { colors, tokens } from 'styles';

const ResultsReadyStyled = styled.div`
  .results-ready__audio {
    display: flex;
    justify-content: center;
  }

  ${AudioCardStyled} {
    width: 95%;
    margin-bottom: -${tokens.spacingLarge};
    z-index: 1;

    * {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

export const ResultsReadyReportStyled = styled.div`
  .results-ready__report_bar {
    background-color: ${({ theme }) => theme?.colors?.foreground || colors.grey[400]};
    height: ${tokens.spacingLarge};
  }

  background: linear-gradient(
    180deg,
    ${({ theme }) => theme?.colors?.background || colors.grey[400]}
    60%,
    transparent 60%
  );

  ${AccordionStyled} {
    margin-bottom: ${tokens.spacingLarge};
  }

  ${AccordionHeaderStyled} {
    border-top: ${({ theme }) =>
      `${tokens.borderWidthMedium} solid ${theme?.colors?.borderHighlight || colors.grey[400]}`};
  }

  ${AccordionBodyStyled} {
    background-color: transparent;
    padding-bottom: 0;
  }
`;

export default ResultsReadyStyled;
