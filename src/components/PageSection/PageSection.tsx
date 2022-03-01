import { ContainerProps } from 'components/Container/Container';
import { Grid } from 'components/Grid';
import { GridProps } from 'components/Grid/Grid';
import { Typography } from 'components/Typography';

import PageSectionStyled from './PageSection.styles';

export interface PageSectionProps extends ContainerProps, GridProps {
  title?: string;
}

/**
 * @description PageSection provides a <section> element with an optional title.
 * This component combines the Grid and Container generic components.
 * @param title The h2 title to display above the content.
 * @returns A header and children container.
 * @note Place within AsyncRegion to ensure grid layout on child elements.
 */
const PageSection: React.FC<PageSectionProps> = (props) => {
  return (
    <PageSectionStyled
      narrow={props.narrow}
      centered
      horizontalPadding={props.horizontalPadding}
    >
      {props.title && (
        <header className="page-section__header">
          <Typography type="heading" level="2">
            {props.title}
          </Typography>
        </header>
      )}
      <Grid verticalPadding={props.verticalPadding} spacing={props.spacing}>
        {props.children}
      </Grid>
    </PageSectionStyled>
  );
};

export default PageSection;
