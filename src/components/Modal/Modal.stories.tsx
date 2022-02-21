import { useArgs } from '@storybook/client-api';
import { Story } from '@storybook/react/types-6-0';

import Modal, { ModalProps } from './Modal';

export default {
  component: Modal,
  title: 'Components/Modal',
  parameters: {
    componentSubtitle: 'A modal that can be used to display content',
  },
  args: {
    opened: true,
  },
};

const Template: Story<ModalProps> = (args) => {
  const [{ opened }, updateArgs] = useArgs();
  const handleClick = () => updateArgs({ opened: !opened });

  return (
    <>
      <button onClick={handleClick}>Toggle Modal</button>
      <Modal {...args} opened={opened} onClose={handleClick}>
        <div>Hello world.</div>
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  opened: true,
};
