import { Typography } from 'components/Typography';

import InformationBannerStyled from './InformationBanner.styles';

export interface InformationBannerProps {
  title?: string;
  type?: 'default' | 'tooltip' | 'error';
}

const InformationBanner: React.FC<InformationBannerProps> = (props) => {
  const titleColor = props.type == 'tooltip' ? 'white' : 'default';
  const type = props.type || 'default';
  return (
    <InformationBannerStyled className={`information-banner--${type}`}>
      <div className="information-banner__title">
        <Typography type="body" level="8" color={titleColor}>
          {props.title}
        </Typography>
      </div>
      <div className="information-banner__content">{props.children}</div>
    </InformationBannerStyled>
  );
};

export default InformationBanner;
