import { Heading } from 'components';

import InformationBannerStyled from './InformationBanner.styles';

export interface InformationBannerProps {
  title?: string;
  color?: 'default' | 'major';
}

const InformationBanner: React.FC<InformationBannerProps> = (props) => {
  const color = props.color || 'default';
  const titleColor = props.color == 'major' ? 'white' : 'default';
  return (
    <InformationBannerStyled className={`${color}`}>
      <div className="information-banner__title">
        <Heading level="8" color={titleColor}>
          {props.title}
        </Heading>
      </div>
      <div className="information-banner__content">{props.children}</div>
    </InformationBannerStyled>
  );
};

export default InformationBanner;
