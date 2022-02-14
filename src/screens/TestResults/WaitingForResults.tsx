import { ArticleCards } from 'app/components/ContentElements/ArticleCards';
import { useAppTranslation } from 'app/components/Shell';
import { useTestStatus } from 'app/hooks';
import { Card } from 'components/Card';
import { CircularProgress } from 'components/CircularProgress';
import { Typography, Heading } from 'components/Typography';
import { colors } from 'styles';

import WaitingForResultsStyled from './WaitingForResults.styles';

export const WaitingForResults = () => {
  const t = useAppTranslation();
  const [{ test }] = useTestStatus();

  return (
    <WaitingForResultsStyled>
      <Heading level="7" color="minor">
        {t('pages.results.waiting.indicatorCard.heading')}
      </Heading>
      <Card>
        <CircularProgress
          percent={test ? test.percentComplete : 0}
          indicatorColor={colors.powderBlue[700]}
          trackColor={colors.powderBlue[200]}
          strokeWidth={6.5}
          radius={38 / 2}
        />
        <div>
          <Heading level="3" color="minor">
            {t('pages.results.waiting.indicatorCard.title')}
          </Heading>
          <Typography type="body" level="8" color="minor">
            {test && test.expectedResultsDate
              ? t('sections.results.expected', { expectedResultsDate: test.expectedResultsDate })
              : t('sections.results.checkBackSoon')
            }
          </Typography>
        </div>
      </Card>
      <Heading level="7" color="minor">
        {t('pages.results.waiting.article.heading')}.
      </Heading>
      <Heading>{t('pages.resources.section.articles.title')}</Heading>
      <ArticleCards feature="RESULTS" />
    </WaitingForResultsStyled>
  );
};