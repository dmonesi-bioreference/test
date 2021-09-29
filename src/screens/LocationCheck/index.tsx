
import { useState } from 'react';

import {
  Button,
  Card,
  PageLayout,
  useAppTranslation,
  Typography,
  Radio,
  RadioGroup
} from 'components';
import { tokens } from 'styles';

export const LocationCheckPage = () => {
  const [value, setValue] = useState<string>('');
  const t = useAppTranslation();
  const handleChange = (e: React.ChangeEvent) => {
    const input = e.currentTarget as HTMLInputElement;
    setValue(input.value);
  };
  return (
    <PageLayout containsCards={true}>
        <Card>
          <div style={{ marginBottom: tokens.spacingMedium }}>
              <Typography type="heading"  level= '2' >{t('sections.results.locationCheck.where')}
              </Typography>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
          <Typography type="body" >{t('sections.results.locationCheck.report')}</Typography>
          </div>
          <div style={{ marginBottom: tokens.spacingXLarge }}>
          <RadioGroup onChange={handleChange} value={value} name="radio">
      <Radio value={t('sections.results.locationCheck.nicu')}  label= {t('sections.results.locationCheck.nicu')} />
      <Radio value={t('sections.results.locationCheck.home')}  label={t('sections.results.locationCheck.home')} />
      <Radio value={t('sections.results.locationCheck.while')}  label= {t('sections.results.locationCheck.while')} />
    </RadioGroup>
          </div>
            <Button kind="primary"  href="/">
            {t('sections.results.locationCheck.continue')}
            </Button>
     </Card>
    </PageLayout>
  );
};
