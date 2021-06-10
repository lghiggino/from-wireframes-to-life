import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Tablr, TablrProps } from './Tablr';

export default {
    title: 'UI/Tablr',
    component: Tablr,
    argTypes: {
        rows: { control: '' },
        headers: { control: '' },
    },
} as Meta;

const Template: Story<TablrProps> = (args) => <Tablr {...args} />;

export const Default = Template.bind({});
Default.args = {
    rows: [
        ["A", "B", "C", "D", "E"],
        ["B", "C", "D", "E", "F"],
        ["C", "D", "E", "F", "G"],
        ["D", "E", "F", "G", "H"],
    ],
    headers: ["col1", "col2", "col3", "col4", "col5"]
};
