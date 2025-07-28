import type { Meta, StoryObj } from '@storybook/react';

import { NewsCarousel } from './news-carousel';

const newsItems = [
  {
    id: 1,
    title: '200 Triệu Gửi Ngân Hàng Agribank Lãi Bao Nhiêu, Nên Gửi Kỳ Hạn Nào...',
    image: '/images/agribank-1.jpg'
  },
  {
    id: 2,
    title: 'The TEN: Khởi Nguyên Chuẩn Sống Thượng Lưu Độc Bản Tại Siêu Đô Thị...',
    image: '/images/estate.jpg'
  },
  {
    id: 3,
    title: 'Vay Ngân Hàng Agribank 100 Triệu Lãi Suất Bao Nhiêu? Vay Tín Chấp Ha...',
    image: '/images/estate.jpg'
  }
];

const meta: Meta<typeof NewsCarousel> = {
  title: 'molecules/NewsCarousel',
  component: NewsCarousel,
  tags: ['autodocs'],
  args: {
    items: newsItems
  }
};

export default meta;

type Story = StoryObj<typeof NewsCarousel>;

export const Default: Story = {};
