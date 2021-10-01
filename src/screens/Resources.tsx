import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

import {
  AppImage,
  PageLayout,
  PageSection,
  Card,
  Typography,
  Heading,
  Spinner,
} from 'components';
import { tokens } from 'styles';

type Article = Record<
  | 'id'
  | 'slug'
  | 'imageUrl'
  | 'title'
  | 'heading'
  | 'shortDescription'
  | 'content',
  string
>;

type ArticleQuery = { getResourceArticle: Article };

function Article(props: Props<{ slug: string }>) {
  const [id] = props.slug.split('-').reverse();
  const query = gql`
  {
    getResourceArticle(id: ${id}) {
      id
      slug
      imageUrl
      title
      heading
      shortDescription
      content
    }
  }
  `;

  const { loading, error, data } = useQuery<ArticleQuery>(query);

  const requestSuccessful = !error && !loading;
  const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  if (requestSuccessful) {
    return (
      <PageLayout containsCards={true}>
        <PageSection header="">
          <Card
            header={
              <AppImage
                src={data?.getResourceArticle.imageUrl || ''}
                alt={data?.getResourceArticle.title || ''}
                width={343}
                height={189}
              />
            }
          >
            <div style={{ marginBottom: tokens.spacingXSmall }}>
              <Typography type="label" labelType="title" color="primary">
                {data?.getResourceArticle.title}
              </Typography>
            </div>
            <div style={{ marginBottom: tokens.spacing }}>
              <Heading>{data?.getResourceArticle.heading}</Heading>
            </div>
            <div
              style={{
                marginBottom: tokens.spacingLarge,
                whiteSpace: 'pre-wrap',
              }}
            >
              <Typography type="body">
                {data?.getResourceArticle.content}
              </Typography>
            </div>
          </Card>
        </PageSection>
      </PageLayout>
    );
  } else {
    return (
      <PageLayout containsCards={true}>
        <PageSection header="">
          <Card>
            <div style={spinnerStyle}>
              <span style={{ fontSize: '3rem' }}>
                <Spinner />
              </span>
            </div>
          </Card>
        </PageSection>
      </PageLayout>
    );
  }
}

export const Resources = () => {
  const router = useRouter();
  const { resource } = router.query;

  if (!resource) return null;

  return <Article slug={resource as string} />;
};
