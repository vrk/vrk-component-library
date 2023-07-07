import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HelloWorld: Story = {
  args: {
    label: 'hello world',
  },
};

export const ClickMe: Story = {
  args: {
    label: 'Click me!',
  },
};
