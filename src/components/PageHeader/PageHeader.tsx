import { ThemeProvider } from 'styled-components';

import { PageSection } from 'components/PageSection';
import { ReturnLink } from 'components/ReturnLink';
import { Typography } from 'components/Typography';
import { getTheme } from 'styles';

import { Grid } from '../Grid';

import PageHeaderStyled from './PageHeader.styles';

export interface PageHeaderProps {
  description?: string;
  theme?: Themes;
  /** If a content page, display a label above the title */
  label?: string;
  /** If a secondary page, backLink you to override the return link at the top of the page. */
  hasReturnLink?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const withDescription = props.description && (
    <Typography type="body" level="7">
      {props.description}
    </Typography>
  );
  const theme = props.theme || 'defaultTheme';
  return (
    <PageHeaderStyled>
      <ThemeProvider theme={getTheme(theme)}>
        <PageSection spacing="extraLarge" verticalPadding="extraLarge">
          {props.hasReturnLink && <ReturnLink />}
          <Grid spacing="base">
            <div className="page-header__title">
              {props.label && (
                <Typography type="label" labelType="title">
                  {props.label}
                </Typography>
              )}
              <Typography type="heading" level="1">
                {props.children}
              </Typography>
            </div>
            {withDescription}
          </Grid>
        </PageSection>
      </ThemeProvider>
    </PageHeaderStyled>
  );
};

export default PageHeader;
