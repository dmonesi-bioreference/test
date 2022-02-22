import { AppImage } from 'components/AppImage';
import { Card } from 'components/Card';
import { Icon } from 'components/Icon';
import { Typography, Heading } from 'components/Typography';

import ContentCardStyled from './ContentCard.styles';

interface StaticRequire {
  default: StaticImageData;
}

declare type StaticImport = StaticRequire | StaticImageData;
export interface ContentCardProps {
  /** Differentiates Card behavior and style */
  variant?: 'link' | 'article' | 'onboarding';
  /** Category label of card */
  label?: string;
  /** Prefix icon name */
  prefixIcon?: 'community' | 'health-profile' | 'resources' | string;
  /** Returns a button when provided an href */
  href?: string;
  /** Title of card */
  heading?: string;
  /** Body text of card */
  body?: string;
  /** Footer text of card */
  footer?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Image source url */
  imageSrc: string | StaticImport;
}

const ContentCard: React.FC<ContentCardProps> = (props) => {
  const labelFragment = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Typography type="label" labelType="title" color="primary">
        {props.label}
      </Typography>
      {props.variant === 'link' && <Icon name="chevron-right" size="small" />}
    </div>
  );

  return (
    <ContentCardStyled {...props}>
      <Card
        href={props.href}
        aria-label={props.heading}
        header={
          <AppImage
            src={props.imageSrc}
            alt={props.imageAlt}
            layout="responsive"
            objectPosition="center center"
            width={343}
            height={189}
          />
        }
        transparent={props.variant ? props.variant == 'onboarding' : false}
        footer={
          props.footer ? (
            <div className="footer">
              <Typography type="heading" color="primary" level="6">
                {props.footer}
              </Typography>

              <Icon name="chevron-right" size="small" />
            </div>
          ) : undefined
        }
      >
        <div className="label">{labelFragment}</div>
        <div className="heading">
          <Heading>{props.heading}</Heading>
        </div>
        <div className="body">
          {props.body && <Typography type="body">{props.body}</Typography>}
          {props.children}
        </div>
      </Card>
    </ContentCardStyled>
  );
};

export default ContentCard;
