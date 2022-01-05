import { useAppTranslation } from 'app/components/Shell';
import { AppImage, Heading, Icon, Typography } from "components";

import PdfStyled from './Pdf.styles';

export interface PdfProps {
  src: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  pagesCount?: number;
}

const Pdf: React.FC<PdfProps> = (props) => {
  const t = useAppTranslation();

  return (
    <PdfStyled>
      <AppImage
        src={props.thumbnail.src}
        alt={props.thumbnail.alt}
      />
      <div className='pdf__bgWrap'>
        <div className='pdf__actions'>
          <Icon name='external-link' style='solid' color='white' />
          <Heading level='3' color='white'>
            {t('components.pdf.actions.openPdf')}
          </Heading>
          {props.pagesCount &&
            <Typography type='body' color='white'>
              {`${props.pagesCount} pages`}
            </Typography>
          }
        </div>
      </div>
    </PdfStyled>
  );
}

export default Pdf;