import React from 'react';
import { Meta, Story } from '@storybook/react';
import Typography from '@mui/material/Typography';
import TypeWriting, { TypeWritingProps } from './TypeWriting';

export default {
  title: 'Atoms/TypeWriting',
  component: TypeWriting,
  decorators: [
    (CStory) => (
      <Typography color='text.primary' variant='h1' fontFamily='JetBrains Mono'>
        <CStory />
      </Typography>
    ),
  ],
} as Meta;

const Template: Story<TypeWritingProps> = (args) => <TypeWriting {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  children: 'Hello World',
};
