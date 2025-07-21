import type { Meta, StoryObj } from '@storybook/react';

import { Animation } from './animation';

const meta: Meta<typeof Animation> = {
  title: 'atoms/Animation',
  component: Animation,
  tags: ['autodocs'],
  args: {
    children: 'Example'
  }
};

export default meta;

type Story = StoryObj<typeof Animation>;

export const Default: Story = {};
