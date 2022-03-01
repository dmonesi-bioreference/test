import { ThemeProvider } from 'styled-components';

import { PageSection } from 'components/PageSection';
import { ReturnLink } from 'components/ReturnLink';
import { SubTitle } from 'components/SubTitle';
import { Typography } from 'components/Typography';
import { getTheme } from 'styles';

import { Grid } from '../Grid';

import PageHeaderStyled from './PageHeader.styles';

export interface PageHeaderProps {
  description?: string;
  theme?: Themes;
  /** Use to display a label above the title */
  label?: string;
  /** Use to add a return link at the top of the page. */
  hasReturnLink?: boolean;
  /** Use to optionally present a subtitle. */
  subTitle?: string;
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
            {props.subTitle && <SubTitle>{props.subTitle}</SubTitle>}
            {withDescription}
          </Grid>
        </PageSection>
      </ThemeProvider>
    </PageHeaderStyled>
  );
};

export default PageHeader;
