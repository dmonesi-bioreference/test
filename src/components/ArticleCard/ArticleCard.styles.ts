import styled from 'styled-components';

import { base, tokens } from 'styles';

const ArticleCardStyled = styled.div`
  ${base}
  .article-card__title{
    margin-bottom: ${tokens.spacingXSmall}
  }
  .article-card__heading{
    margin-bottom: ${tokens.spacing}
  }
  .article-card__body{
    margin-bottom: ${tokens.spacingLarge}
  }
`;

export default ArticleCardStyled;
