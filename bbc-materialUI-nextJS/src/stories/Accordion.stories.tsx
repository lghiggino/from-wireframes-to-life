import React from 'react';
import { Story, Meta } from '@storybook/react';

import {ControlledAccordions, ControlledAccordionsProps } from './Accordion';

export default {
  title: 'UI/ControlledAccordions',
  component: ControlledAccordions,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontSize: { control: "range" }
  },
} as Meta;

const Template: Story<ControlledAccordions> = (args) => <ControlledAccordions {...args} />;

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
