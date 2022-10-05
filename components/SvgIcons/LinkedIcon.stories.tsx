import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import LinkedInIcon from './LinkedInIcon';

export default {
  title: 'Atoms/Icons/LinkedIn',
  component: LinkedInIcon,
} as Meta;

const Template: Story<SvgIconProps> = (args) => <LinkedInIcon {...args} />;

export const Simple = Template.bind({});

Simple.args = {};
