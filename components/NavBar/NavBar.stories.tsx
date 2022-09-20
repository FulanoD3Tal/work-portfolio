import React from 'react';
import { Meta, Story } from '@storybook/react';
import NavBar from './NavBar';

export default {
  title: 'Common/NavBar',
  component: NavBar,
} as Meta;

const Template: Story = (args) => <NavBar {...args} />;

export const Simple = Template.bind({});

Simple.args = {};
