import React from 'react';
import { Meta, Story } from '@storybook/react';
import ContactMe from './ContactMe';

export default {
  title: 'Common/ContactMe',
  component: ContactMe,
} as Meta;

const Template: Story = (args) => <ContactMe {...args} />;

export const Simple = Template.bind({});

Simple.args = {};
