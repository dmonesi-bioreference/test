import { ThemeProvider } from 'styled-components';

import { Footer } from 'app/components/Footer';
import { PatientBanner } from 'app/components/PatientBanner';
import { PageBorder } from 'components/PageBorder';
import { PageHeader } from 'components/PageHeader';
import { PageLayout } from 'components/PageLayout';
import { PageLayoutProps } from 'components/PageLayout/PageLayout';
import { PageSection } from 'components/PageSection';
import { containers, getTheme } from 'styles';

import AppLayoutStyled from './AppLayout.styles';

export type AppLayoutProps = Omit<
  PageLayoutProps,
  'additionalHeaders' | 'footer'
> & {
  isLoading?: boolean;
  theme?: Themes;
  hasBackgroundEllipse?: boolean;
  hasPatientBanner?: boolean;
  hasReturnLink?: boolean;
  subTitle?: string;
  label?: string;
  title?: string;
  description?: string;
  containsCards?: boolean;
  isWithoutFooter?: boolean;
};

export const AppLayout: React.FC<AppLayoutProps> = ({
  isWithoutFooter,
  theme = 'defaultTheme',
  hasPatientBanner,
  children,
  ...props
}) => {
  const withCards = props.containsCards ? 'base' : 'large';
  const additionalHeaders = (
    <>
      {hasPatientBanner && <PatientBanner />}
      <PageBorder loading={props.isLoading ? 'loading' : 'loaded'} />
      {props.title || props.description ? (
        <PageHeader
          description={props.description}
          label={props.label}
          hasReturnLink={props.hasReturnLink}
          theme={theme}
          subTitle={props.subTitle}
        >
          {props.title}
        </PageHeader>
      ) : null}
    </>
  );
  const footer = isWithoutFooter ? null : <Footer />;
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <AppLayoutStyled>
        <div className={'app-layout__background-wrapper'}>
          {props.hasBackgroundEllipse && <figure className="ellipse" />}
        </div>

        <PageLayout additionalHeaders={additionalHeaders} footer={footer}>
          <PageSection
            spacing="extraExtraLarge"
            verticalPadding="none"
            horizontalPadding={withCards}
            centered
          >
            {children}
          </PageSection>

          <div style={{ height: `${containers.spacingPageBottom}` }} />
        </PageLayout>
      </AppLayoutStyled>
    </ThemeProvider>
  );
};

export const RegistrationPageLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <AppLayout
      isLoading={props.isLoading}
      theme="defaultTheme"
      title={props.title}
      description={props.description}
      subTitle={props.subTitle}
      hasBackgroundEllipse
      isWithoutNav
      isWithoutFooter
    >
      {props.children}
    </AppLayout>
  );
};

export const PreLoginPageLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <AppLayout
      theme="defaultTheme"
      title={props.title}
      description={props.description}
      subTitle={props.subTitle}
      hasBackgroundEllipse
      isWithoutNav
    >
      {props.children}
    </AppLayout>
  );
};

export const HomePageLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <AppLayout
      isLoading={props.isLoading}
      containsCards
      hasPatientBanner
      theme="defaultTheme"
    >
      {props.children}
    </AppLayout>
  );
};

export const MainNavPageLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <AppLayout
      isLoading={props.isLoading}
      containsCards
      hasPatientBanner
      theme={props.theme}
      title={props.title}
      description={props.description}
    >
      {props.children}
    </AppLayout>
  );
};

export const ContentPageLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <AppLayout
      isLoading={props.isLoading}
      theme="resourcesTheme"
      label={props.label}
      title={props.title}
      hasReturnLink
    >
      {props.children}
    </AppLayout>
  );
};

export const TerminusPageLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <AppLayout
      isLoading={props.isLoading}
      theme={props.theme}
      title={props.title}
      description={props.description}
      hasReturnLink
      hasBackgroundEllipse
    >
      {props.children}
    </AppLayout>
  );
};
