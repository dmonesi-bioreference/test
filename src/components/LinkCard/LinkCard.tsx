import { AppImage } from 'components/AppImage';
import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Icon } from 'components/Icon';
import { Typography, Heading } from 'components/Typography';

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
  /** Footer text of card */
  footer?: string;
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
        footer={
          props.footer ? (
            <Button
              color="light"
              kind="link-medium"
              href={props.href}
              suffix={<Icon name="chevron-right" size="small" />}
              spreadContent={true}
            >
              {props.footer}
            </Button>
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
    </LinkCardStyled>
  );
};

export default LinkCard;
