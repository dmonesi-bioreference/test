import { useAppTranslation } from 'app';
import { DisplayField } from 'app/components/DisplayField';
import { Button, ListCard, PageLayout } from 'components';

export const Settings = () => {
  const t = useAppTranslation();
  return (
    <PageLayout containsCards title={t('pages.settings.title')}>
      <ListCard
        iconName="user-circle"
        title={t('pages.settings.accountDetails.title')}
      >
        <DisplayField
          label={t('pages.settings.accountDetails.fields.1.label')}
        />
        <DisplayField
          label={t('pages.settings.accountDetails.fields.2.label')}
        />
      </ListCard>

      <ListCard
        iconName="phone"
        title={t('pages.settings.contactDetails.title')}
      >
        <DisplayField
          label={t('pages.settings.contactDetails.fields.1.label')}
        />
        <DisplayField
          label={t('pages.settings.contactDetails.fields.2.label')}
        />
        <DisplayField
          label={t('pages.settings.contactDetails.fields.3.label')}
        />
      </ListCard>

      <Button kind="link-small">{t('pages.settings.actions.1.label')}</Button>
      <Button kind="link-small">{t('pages.settings.actions.2.label')}</Button>
      <Button kind="link-small">{t('pages.settings.actions.3.label')}</Button>
    </PageLayout>
  );
};
