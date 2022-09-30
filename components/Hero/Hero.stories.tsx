import React from 'react';
import { Meta, Story } from '@storybook/react';
import Hero from './Hero';

export default {
  title: 'Common/Hero',
  component: Hero,
} as Meta;

const Template: Story = (args) => <Hero {...args} />;

export const Simple = Template.bind({});

Simple.args = {};
