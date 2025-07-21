import type { Meta, StoryObj } from '@storybook/react';

import { BoxTransaction } from './box-transaction';

const meta: Meta<typeof BoxTransaction> = {
  title: 'atoms/BoxTransaction',
  component: BoxTransaction,
  tags: ['autodocs'],
  args: {
    data: [1, 2, 3]
  }
};

export default meta;

type Story = StoryObj<typeof BoxTransaction>;

export const Default: Story = {};
