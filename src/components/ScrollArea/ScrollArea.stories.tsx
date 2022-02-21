import { Story } from '@storybook/react/types-6-0';

import ScrollArea, { ScrollAreaProps } from './ScrollArea';

export default {
  component: ScrollArea,
  title: 'Components/ScrollArea',
  parameters: {
    componentSubtitle: 'A scrollable area that enforces a maximum height',
  },
};

const Template: Story<ScrollAreaProps> = (args) => (
  <ScrollArea {...args}>
    <div>
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
      vestibulum. Aenean lacinia bibendum nulla sed consectetur. Donec
      ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta
      felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
      lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Duis mollis,
      est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
      nec elit. Donec ullamcorper nulla non metus auctor fringilla. Donec id
      elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed
      consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris
      condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere
      consectetur est at lobortis. Donec id elit non mi porta gravida at eget
      metus. Maecenas faucibus mollis interdum. Cras mattis consectetur purus
      sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
      quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
      Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Donec ullamcorper nulla non metus auctor fringilla. Curabitur
      blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Maecenas faucibus mollis interdum. Vestibulum id ligula
      porta felis euismod semper. Cum sociis natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Donec id elit non mi porta
      gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu
      leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
      diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget
      risus varius blandit sit amet non magna.
    </div>
  </ScrollArea>
);

export const Primary = Template.bind({});

Primary.args = {
  style: { height: '400px', width: '300px' },
};
