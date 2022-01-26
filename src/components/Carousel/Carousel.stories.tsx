import { Story } from '@storybook/react/types-6-0';

import Carousel, { CarouselProps } from './Carousel';

export default {
  component: Carousel,
  title: 'Components/Carousel',
  parameters: {
    componentSubtitle: 'Swipeable slides for cylcing through content.',
  },
}

const sampleSlides = () => {
  return [1, 2, 3, 4].map((elem, index) => (
    <div
      key={index}
      style={{
        height: '300px',
        color: 'white',
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {`Slide ${elem}`}
    </div>
  ))
}

const Template: Story<CarouselProps> = (args) => (
  <Carousel {...args}>
    {sampleSlides()}
  </Carousel>
);

export const Primary = Template.bind({});

export const ExternalControls = () => (
  <Carousel externalControl={{ prevText: 'Prev', nextText: 'Next' }}>
    {sampleSlides()}
  </Carousel>
);

ExternalControls.parameters = {
  docs: {
    storyDescription: "Carousel with external controls for going to the next or previous slide.",
  }
}

export const Peak: Story = () => (
  <Carousel enablePeak={true}>
    {sampleSlides()}
  </Carousel>
);

Peak.parameters = {
  docs: {
    storyDescription: "Carousel in cetner mode that allows peaking to the next and previous slides.",
  }
};
