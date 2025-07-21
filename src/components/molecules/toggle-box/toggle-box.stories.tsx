import type { Meta, StoryObj } from '@storybook/react';

import { ToggleBox } from './toggle-box';

const meta: Meta<typeof ToggleBox> = {
  title: 'atoms/ToggleBox',
  component: ToggleBox,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof ToggleBox>;

export const Default: Story = {};
