import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MuiButton, MuiButtonProps } from './MuiButtton';

export default {
  title: 'Material UI/MuiButton',
  component: MuiButton,
} as Meta;

const Template: Story<MuiButtonProps> = (args) => <MuiButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
