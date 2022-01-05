import { useAppSelector, useAppTranslation } from 'app';
import {
  Card,
  CircularProgress,
  Heading,
  PageLayout,
  PageSection,
  UserHeader
} from 'components';
import { colors } from 'styles';

import WaitingForResultsStyled from './WaitingForResults.styles';

export const WaitingForResults = () => {
  const t = useAppTranslation();
  const percentComplete = useAppSelector((state) => state.context.test.percentComplete);
  const expectedResultsDate = useAppSelector((state) => state.context.test.expectedResultsDate);

  return (
    <PageLayout containsCards={true}>
      <PageSection
        header={
          <UserHeader
            title={t('sections.results.childsName')}
            name="Lisa Consuela Jackson"
          />
        }
      >
        <WaitingForResultsStyled>
          <Heading level='1' color='minor'>
            {t('pages.results.waiting.title')}
          </Heading>
          <div>
            <Heading level='7' color='minor'>
              {t('pages.results.waiting.indicatorCard.heading')}
            </Heading>
            <Card>
              <CircularProgress
                percent={percentComplete}
                indicatorColor={colors.teal[700]}
                trackColor={colors.teal[200]}
                strokeWidth={6.5}
                radius={38 / 2}
              />
              <div>
                <Heading level='3' color='minor'>
                  {t('pages.results.waiting.indicatorCard.title')}
                </Heading>
                <Heading level='8' color='minor'>
                  {t('pages.results.waiting.indicatorCard.subTitle', { expectedResultsDate })}
                </Heading>
              </div>
            </Card>
            <Heading level='7' color='minor'>
              {t('pages.results.waiting.article.heading')}.
            </Heading>
          </div>
        </WaitingForResultsStyled>
      </PageSection>
    </PageLayout>
  );
};