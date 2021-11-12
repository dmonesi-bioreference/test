import { AppImage, Card, Heading, Typography } from 'components';

import ArticleCardStyled from './ArticleCard.styles';

interface StaticRequire {
  default: StaticImageData;
}

declare type StaticImport = StaticRequire | StaticImageData;
export interface ArticleCardProps {
  title?: string;
  heading?: string;
  body?: string;
  imageTitle?: string;
  imageSrc: string | StaticImport;
  key: number;
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  return (
    <ArticleCardStyled>
      <div>
        <Card
          header={
            <AppImage
              src={props.imageSrc}
              alt={props.imageTitle}
              width={343}
              height={189}
            />
          }
        >
          <div className="article-card__title">
            <Typography type="label" labelType="title" color="primary">
              {props.title}
            </Typography>
          </div>
          <div className="article-card__heading">
            <Heading>{props.heading}</Heading>
          </div>
          <div className="article-card__body">
            <Typography type="body">{props.body}</Typography>
          </div>
        </Card>
      </div>
    </ArticleCardStyled>
  );
};

export default ArticleCard;
