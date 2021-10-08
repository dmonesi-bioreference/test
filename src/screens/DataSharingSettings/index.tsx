import {
  Card,
  PageLayout,
  Typography,
  useAppTranslation,
  Toggle,
  Divider,
} from 'components';
import { tokens } from 'styles'

import DataSharingSetting from './DataSharingSetting.styles';


export const DataSharingSettings = () => {
  const t = useAppTranslation();

  interface DataSettingsRowProps {
    title: string;
    isLast: boolean;
    content: string;
  }

  const DataSettingsRow: React.FC<DataSettingsRowProps> = (props) => {
    return (
      <div className="data-sharing-settings--row">
        <div className="data-sharing-settings--content">
          <div className="data-sharing-settings--text-wrapper">
            <Typography type="heading" level='5' >{props.title}</Typography>
            <div style={{ marginTop: tokens.spacingXSmall }}>
              <Typography type="body" color='minor'>{props.content}
              </Typography>
            </div>
          </div>
          <div className="data-sharing-settings--section-row">
            <Toggle label="Switch No Text Large" />
          </div>
        </div>
        {!props.isLast && <Divider />}
      </div>
    )
  }


  return (
    <PageLayout containsCards={true}>
      <DataSharingSetting>
        <div className="data-sharing-settings--heading-container">
          <Typography type="heading" level='2' alignment='center'> {t('sections.dataSharingSettings.headData')}
          </Typography>
        </div>
        <Divider />

        <div className="data-sharing-settings--section-heading">
          <Typography type="label" labelType='display' >{t('sections.dataSharingSettings.dataSharingHeadingOne')}</Typography>
        </div>
        <Card>
          <DataSettingsRow title={t('sections.dataSharingSettings.titleOne')} content={t('sections.dataSharingSettings.content')} isLast={false} />
          <DataSettingsRow title={t('sections.dataSharingSettings.titleTwo')} content={t('sections.dataSharingSettings.content')} isLast={false} />
          <DataSettingsRow title={t('sections.dataSharingSettings.titleThree')} content={t('sections.dataSharingSettings.content')} isLast={true} />
        </Card>
        <div className="data-sharing-settings--section-heading" style={{ marginTop: tokens.spacingXLarge, marginBottom: tokens.spacingXSmall }}>
          <Typography type="label" labelType='display' >{t('sections.dataSharingSettings.titleSix')}
          </Typography>
        </div>
        <Card>
          <DataSettingsRow title={t('sections.dataSharingSettings.titleFour')} content={t('sections.dataSharingSettings.content')} isLast={false} />
          <DataSettingsRow title={t('sections.dataSharingSettings.titleFive')} content={t('sections.dataSharingSettings.content')} isLast={true} />
        </Card>
      </DataSharingSetting>
    </PageLayout>
  );
};