import type { Meta, StoryObj } from '@storybook/react';

import { NewsCard } from './new-card';

const meta: Meta<typeof NewsCard> = {
  title: 'molecules/NewsCard',
  component: NewsCard,
  tags: ['autodocs'],
  args: {
    image: '/images/estate.jpg',
    source: 'News Source',
    title: 'News Title',
    url: 'https://news.com',
    time: '2 hours ago',
    avatar: '/images/avatar.jpg',
    category: 'Category',
    isVerified: true,
    actions: <button>Read More</button>,
    direction: 'vertical'
  }
};

export default meta;

type Story = StoryObj<typeof NewsCard>;

export const Default: Story = {};
