import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputBox from './InputBox';

export default {
  component: InputBox,
  title: 'InputBox',
} as ComponentMeta<typeof InputBox>;


export const Primary: ComponentStory<typeof InputBox> = () => <InputBox>InputBox</InputBox>;