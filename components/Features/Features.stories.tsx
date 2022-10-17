import React from 'react';
import { Meta, Story } from '@storybook/react';
import Features from './Features';

export default {
  title: 'Common/Features',
  component: Features,
} as Meta;

const Template: Story = (args) => <Features {...args} />;

export const Simple = Template.bind({});

Simple.args = {};
