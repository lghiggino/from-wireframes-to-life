import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MuiSnackBar, MuiSnackBarProps } from './MuiSnackBar';

export default {
    title: "Material UI/SnackBar",
    component: MuiSnackBar,
    argTypes: {
        elevation: {control: {type: 'range', min: 0, max: 24, step: 1}},
    }
} as Meta

const Template: Story<MuiSnackBarProps> = (args) => <MuiSnackBar {...args} />;

export const Primary = Template.bind({});
Primary.args={
    message: "This is a message at the snackbar body"
    
}