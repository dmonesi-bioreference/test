import { useEffect, useState } from 'react';

import { useAppTranslation } from 'app/components/Shell';
import { AppImage } from 'components/AppImage';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { Typography, Heading } from 'components/Typography';

import PdfStyled from './Pdf.styles';

export interface PdfProps {
  src: Blob;
  thumbnail?: {
    src: string | StaticImageData;
    alt: string;
  };
  pagesCount?: number;
}

const Pdf: React.FC<PdfProps> = (props) => {
  const t = useAppTranslation();
  const [url, setUrl] = useState<string>('');

  const onClick = () => {
    const fileUrl = URL.createObjectURL(props.src);
    setUrl(fileUrl);
    window.open(fileUrl);
  };

  useEffect(() => () => URL.revokeObjectURL(url), [url]);

  return (
    <PdfStyled>
      {props.thumbnail &&
        <AppImage src={props.thumbnail.src} alt={props.thumbnail.alt} />
      }
      <div className="pdf__bgWrap">
        <div className="pdf__actions">
          <Button
            kind="link-small"
            prefix={<Icon name="external-link" style="solid" color="white" />}
            onClick={onClick}
          >
            <Heading level="3" color="white">
              {t('components.pdf.actions.openPdf')}
            </Heading>
          </Button>
          {props.pagesCount && (
            <Typography type="body" color="white">
              {`${props.pagesCount} pages`}
            </Typography>
          )}
        </div>
      </div>
    </PdfStyled>
  );
};

export default Pdf;
