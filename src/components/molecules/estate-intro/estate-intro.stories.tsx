import type { Meta, StoryObj } from '@storybook/react';

import { EstateIntro } from './estate-intro';

const meta: Meta<typeof EstateIntro> = {
  title: 'atoms/EstateIntro',
  component: EstateIntro,
  tags: ['autodocs'],
  args: {
    name: 'Biệt thự ven sông',
    description: 'Biệt thự cao cấp với không gian xanh, gần trung tâm, tiện ích đầy đủ.',
    image: '/images/estate.jpg',
    address: '123 Đường Hoa Sứ, Quận 7, TP.HCM',
    price: '25 tỷ',
    area: '500m²',
    tags: ['Sân vườn', 'Hồ bơi', 'An ninh 24/7']
  }
};

export default meta;

type Story = StoryObj<typeof EstateIntro>;

export const Default: Story = {};
