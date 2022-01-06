import { AppImage, Button, Card, Heading, Typography, Icon } from 'components';

import LinkCardStyled from './LinkCard.styles';

interface StaticRequire {
  default: StaticImageData;
}

declare type StaticImport = StaticRequire | StaticImageData;
export interface LinkCardProps {
  /** Differentiates Card behavior and style */
  variant?: 'link' | 'article';
  /** Category label of card */
  label?: string;
  /** Prefix icon name */
  prefixIcon?: 'community' | 'health-profile' | 'resources' | string;
  /** Color of the label area, usually a theme */
  href?: string;
  /** Title of card */
  heading?: string;
  /** Body text of card */
  body?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Image source url */
  imageSrc: string | StaticImport;
  /** Optional theme color */
  themeColor?: string;
}

const LinkCard: React.FC<LinkCardProps> = (props) => {
  const labelFragment =
    props.variant == 'link' ? (
      <Button
        className="label--button"
        kind="link-medium"
        href={props.href}
        prefix={
          props.prefixIcon && <Icon kind="custom" name={props.prefixIcon} />
        }
        suffix={<Icon name="arrow-right" />}
      >
        {props.label}
      </Button>
    ) : (
      /** Return if the variant is 'article' */
      <Typography type="label" labelType="title" color="primary">
        {props.label}
      </Typography>
    );

  return (
    <LinkCardStyled {...props}>
      <Card
        maxHeaderHeight={189}
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
    </LinkCardStyled>
  );
};

export default LinkCard;
