import type { Meta, StoryObj } from '@storybook/react';

import Slider from './Slider';

const meta = {
  title: 'Slider',
  component: Slider,
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageSize: Story = {
  args: {
    label: "dither style",
  },
};
