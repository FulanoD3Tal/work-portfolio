import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomButton, { ButtonProps } from './CustomButton';

export default {
  title: 'Atoms/CustomButton',
  component: CustomButton,
  argTypes: {
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <CustomButton {...args} />;

export const Simple = Template.bind({});

Simple.args = {};
