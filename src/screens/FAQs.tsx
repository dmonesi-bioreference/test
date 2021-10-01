import { useQuery, gql } from '@apollo/client';

import {
  PageLayout,
  PageSection,
  Button,
  Card,
  Typography,
  Heading,
  useAppTranslation,
  Spinner,
} from 'components';
import { tokens } from 'styles';

type FAQQuery = { getFaqItemListing: { edges: FAQItem[] } };
type FAQItem = { node: { question: string; answer: string } };
const FAQ_QUERY = gql`
  {
    getFaqItemListing {
      edges {
        node {
          question
          answer
        }
      }
    }
  }
`;

export const FAQs = () => {
  const translations = useAppTranslation();
  const { data, loading, error } = useQuery<FAQQuery>(FAQ_QUERY);
  const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const faqItems: FAQItem[] = data?.getFaqItemListing?.edges || [];
  const anyFaqItems = faqItems.length > 0;

  return (
    <PageLayout containsCards={true}>
      <PageSection header="">
        <Card>
          <div style={{ marginBottom: tokens.spacingLarge }}>
            <Heading>{translations('sections.resources.faq.title')}</Heading>
          </div>

          {loading ? (
            <div style={spinnerStyle}>
              <span style={{ fontSize: '3rem' }}>
                <Spinner />
              </span>
            </div>
          ) : anyFaqItems ? (
            faqItems.map((question, index) => {
              return (
                <div style={{ marginBottom: tokens.spacingXLarge }} key={index}>
                  <Button kind="secondary" href="#">
                    {question.node.question}
                  </Button>
                  <Typography type="helper-text">
                    {question.node.answer}
                  </Typography>
                </div>
              );
            })
          ) : null}

          {error ? <div>an error has occured</div> : null}
        </Card>
      </PageSection>
    </PageLayout>
  );
};
