import type { Meta, StoryObj } from '@storybook/react';

import { ProvinceColumn } from './province-column';

const provinces = [
  { name: 'Hà Nội', color: 'bg-red-500', image: '/images/estate.jpg' },
  { name: 'TP. HCM', color: 'bg-blue-500', image: '/images/etienne.jpg' },
  { name: 'Đà Nẵng', color: 'bg-green-500', image: '/images/estate.jpg' },
  { name: 'Cần Thơ', color: 'bg-yellow-500', image: '/images/etienne.jpg' },
  { name: 'Hải Phòng', color: 'bg-purple-500', image: '/images/estate.jpg' }
];

const meta: Meta<typeof ProvinceColumn> = {
  title: 'molecules/ProvinceColumn',
  component: ProvinceColumn,
  tags: ['autodocs'],
  args: {
    provinces: provinces
  }
};

export default meta;

type Story = StoryObj<typeof ProvinceColumn>;

export const Default: Story = {};
