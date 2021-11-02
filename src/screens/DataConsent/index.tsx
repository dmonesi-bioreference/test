import { useState } from 'react';

import { useAppTranslation } from 'app';
import {
  Card,
  Radio,
  RadioGroup,
  PageLayout,
  Button,
  Typography,
} from 'components';
import { tokens } from 'styles';

import DataConsentStyledDiv from './DataConsent.styles';

export const DataConsent = () => {
  const t = useAppTranslation();
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent) => {
    const input = e.currentTarget as HTMLInputElement;
    setValue(input.value);
  };

  const getMaskedData = () => {
    return (
      <div className="data--row">
        <div className="data__ellipse data-consent--mask_data_background" />
        <div>
          <div className="data data__tag--medium data-consent--mask_data_background" />
          <div className="data data__tag--short data-consent--mask_data_background" />
        </div>
      </div>
    );
  };

  const Preview: React.FC = (props) => {
    return <div className="data__preview-card">{props.children}</div>;
  };
  return (
    <PageLayout containsCards={true}>
      <DataConsentStyledDiv>
        <Card>
          <div style={{ marginBottom: tokens.spacingXSmall }}>
            <Preview>
              <Typography type="label" labelType="display">
                {t('sections.dataConsent.resources')}
              </Typography>
              <div className="data--row">
                <div className="data data__tag--medium data-consent--mask_data_background" />
                <div className="data data__tag--short data-consent--mask_data_background" />
                <div className="data data__tag--long data-consent--mask_data_background" />
              </div>
              <div className="data--row">
                <div className="data data__tag--long data-consent--mask_data_background" />
                <div className="data data__tag--long data-consent--mask_data_background" />
              </div>
            </Preview>
          </div>
          <div style={{ marginBottom: tokens.spacingLarge }}>
            <Preview>
              <Typography type="label" labelType="display">
                {t('sections.dataConsent.similar')}
              </Typography>

              <div className="data--row">
                {getMaskedData()}
                {getMaskedData()}
              </div>
            </Preview>
          </div>

          <div style={{ marginBottom: tokens.spacing }}>
            <Typography type="heading" level="2" alignment="center">
              {t('sections.dataConsent.child')}
            </Typography>
          </div>
          <Typography type="body" alignment="center">
            {t('sections.dataConsent.para')}
          </Typography>
          <div
            style={{ margin: `${tokens.spacingXLarge} 0`, textAlign: 'center' }}
          >
            <RadioGroup onChange={handleChange} value={value} name="radio">
              <Radio
                value={t('sections.dataConsent.yes')}
                label={t('sections.dataConsent.yes')}
              />
              <Radio
                value={t('sections.dataConsent.no')}
                label={t('sections.dataConsent.no')}
              />
            </RadioGroup>
          </div>
          <Button href="/location-check" kind="primary" submit={true}>
            {t('sections.dataConsent.continue')}
          </Button>
          <div style={{ marginTop: tokens.spacing }}>
            <Typography type="helper-text" color="minor" alignment="center">
              {' '}
              {t('sections.dataConsent.footer')}
            </Typography>
          </div>
        </Card>
      </DataConsentStyledDiv>
    </PageLayout>
  );
};
