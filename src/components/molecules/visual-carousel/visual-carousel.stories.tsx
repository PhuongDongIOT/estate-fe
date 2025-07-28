import type { Meta, StoryObj } from '@storybook/react';

import { VisualCarousel } from './visual-carousel';

const imageList = [
  {
    src: '/images/estate.jpg',
    title: 'Sunshine City',
    subtitle: 'Không gian sống đẳng cấp',
    label: 'Căn hộ'
  },
  {
    src: '/images/estate.jpg',
    title: 'Sunshine City',
    subtitle: 'Không gian sống đẳng cấp',
    label: 'Căn hộ'
  },
  {
    src: '/images/estate.jpg',
    title: 'Sunshine City',
    subtitle: 'Không gian sống đẳng cấp',
    label: 'Căn hộ'
  }
];

const meta: Meta<typeof VisualCarousel> = {
  title: 'molecules/VisualCarousel',
  component: VisualCarousel,
  tags: ['autodocs'],
  args: {
    images: imageList,
    autoplayDelay: 2000,
    dragFree: true,
    className: 'my-8',
    slideClassName: 'shadow-xl'
  }
};

export default meta;

type Story = StoryObj<typeof VisualCarousel>;

export const Default: Story = {};
