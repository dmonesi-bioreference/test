import { Footer } from 'app/components/Footer';
import { PatientBanner } from 'app/components/PatientBanner';
import { PageLayout } from 'components/PageLayout';
import { PageLayoutProps } from 'components/PageLayout/PageLayout';

type AppLayoutProps = Omit<PageLayoutProps, 'header' | 'footer' | 'banner'> & {
  isWithoutFooter?: boolean;
  hasPatientBanner?: boolean;
};

export const AppLayout: React.FC<AppLayoutProps> = ({
  isWithoutFooter,
  hasPatientBanner,
  children,
  ...props
}) => {
  const banner = hasPatientBanner ? <PatientBanner /> : null;
  const footer = isWithoutFooter ? null : <Footer />;

  return (
    <PageLayout {...props} banner={banner} footer={footer}>
      {children}
    </PageLayout>
  );
};
