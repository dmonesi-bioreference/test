import React, { useState } from 'react';
import Dialog, { DialogProps } from './Dialog';
import Button from '../Button/Button';
import { Story } from '@storybook/react/types-6-0';

export default {
  component: Dialog,
  title: 'Components/Dialog',
};

const Template: Story<DialogProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={toggleOpen}>Trigger Modal</Button>
      <Dialog
        {...args}
        footer={<Button onClick={toggleOpen}>Close</Button>}
        open={isOpen}
      >
        Hello World
      </Dialog>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  title: 'Dialog Title',
  dismissOnOverlay: true,
  hideHeader: false,
};
