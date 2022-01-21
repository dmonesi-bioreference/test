import { Story } from '@storybook/react/types-6-0';

import geneticCounselor from 'assets/images/png/geneticCounselor.png';
import { Avatar } from 'components';
import { StyleGuideItem } from 'components/StyleGuide/StyleGuideItem';

import { Typography } from './Typography';

export default {
  component: Typography,
  title: 'Components/Typography',
  parameters: {
    componentSubtitle:
      'Typography is used to convey hierarchy of text information.',
  },
};

export const Headings: Story = () => (
  <div>
    <StyleGuideItem label="Primary Heading(h1), Sans Serif">
      <Typography type="heading" level="1">
        Hello, World!
      </Typography>
    </StyleGuideItem>

    <StyleGuideItem label="Primary Heading(h1), Wrapped around Image">
      <div style={{ width: 375 }}>
        <Typography
          type="heading"
          level="1"
          objectToWrap={
            <Avatar
              src={geneticCounselor}
              alt="Photograph of our genetic counselor, Laura."
              shape="circular"
              size="small"
            />
          }
        >
          Here is a much longer title than the others, to demonstrate wrapping.
        </Typography>
      </div>
    </StyleGuideItem>

    <StyleGuideItem label="Secondary Heading (h2), Serif">
      <Typography type="heading" level="2">
        Hello, World!
      </Typography>
    </StyleGuideItem>

    <StyleGuideItem label="Secondary Heading (h2), Sans Serif">
      <Typography type="heading" level="2">
        Hello, World!
      </Typography>
    </StyleGuideItem>

    <StyleGuideItem label="Tertiary Heading (h3), Sans Serif">
      <Typography type="heading" level="3">
        Hello, World!
      </Typography>
    </StyleGuideItem>

    <StyleGuideItem label="Quaternary Heading (h4)">
      <Typography type="heading" level="4">
        Hello, World!
      </Typography>
    </StyleGuideItem>

    <StyleGuideItem label="Quinary Heading (h5)">
      <Typography type="heading" level="5">
        Hello, World!
      </Typography>
    </StyleGuideItem>

    <StyleGuideItem label="Senary Heading (h6)">
      <Typography type="heading" level="6">
        Hello, World!
      </Typography>
    </StyleGuideItem>

    <StyleGuideItem label="Septernary Heading (h7)">
      <Typography type="heading" level="7">
        Hello, World!
      </Typography>
    </StyleGuideItem>

    <StyleGuideItem label="Octonary Heading (h8)">
      <Typography type="heading" level="8">
        Hello, World!
      </Typography>
    </StyleGuideItem>
  </div>
);

export const Body: Story = () => (
  <StyleGuideItem label="Body text">
    <Typography type="body">Lorem ipsum dolor set amet.</Typography>
  </StyleGuideItem>
);

export const HelperText: Story = () => (
  <StyleGuideItem label="Helper text">
    <Typography type="helper-text">Lorem ipsum dolor set amet.</Typography>
  </StyleGuideItem>
);

export const List: Story = () => (
  <StyleGuideItem label="List">
    <Typography type="list">Lorem ipsum dolor set amet.</Typography>
  </StyleGuideItem>
);

export const TitleLabel: Story = () => (
  <StyleGuideItem label="Label, for title">
    <Typography type="label" labelType="title">
      Lorem ipsum
    </Typography>
  </StyleGuideItem>
);

export const DisplayLabel: Story = () => (
  <StyleGuideItem label="Label, for display label">
    <Typography type="label" labelType="display">
      Lorem ipsum
    </Typography>
  </StyleGuideItem>
);

export const InputLabel: Story = () => (
  <StyleGuideItem label="Label, for an input">
    <Typography type="label" labelType="input">
      Lorem ipsum
    </Typography>
  </StyleGuideItem>
);

export const DataLabel: Story = () => (
  <StyleGuideItem label="Label, for data">
    <Typography type="label" labelType="data">
      Lorem ipsum
    </Typography>
  </StyleGuideItem>
);
