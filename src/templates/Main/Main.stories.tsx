import InTheNICUImage from 'assets/images/jpg/InTheNICU.jpg';
import { Button, Card, Icon, Typography } from 'components';

import Main from '.';

export default {
  title: 'Templates/Main',
};

export const exampleCards = () => (
  <Main>
    <div style={{ width: 343, marginBottom: 24 }}>
      <Card header={articleHeader}>
        <div style={{ marginBottom: 8 }}>
          <Typography type="category">Real family story</Typography>
        </div>
        <div style={{ marginBottom: 16 }}>
          <Typography type="heading" level="2">
            How other parents have coped with this time of uncertainty.
          </Typography>
        </div>
        <Typography type="body">
          They said it was supposed to be the most wonderful experience of my
          life. But when Jonas was born with complications I struggled..
        </Typography>
        <div style={{ marginTop: 24, width: '100%' }}>
          <Button kind="primary">Read Story</Button>
        </div>
      </Card>
    </div>
    <div style={{ width: 343 }}>
      <Card>
        <div style={{ marginBottom: 32 }}>
          <Typography type="heading" level="2">
            Whole Genome Sequencing
          </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: 24 }}>
            <Icon name="atom" kind="custom" />
          </div>
          <Typography type="body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text.
          </Typography>
        </div>
      </Card>
    </div>
  </Main>
);

const articleHeader = (
  <img className="card__image" src={InTheNICUImage} alt="In The NICU" />
);
