import type { Meta, StoryObj } from '@storybook/react';

import { HeroBanner } from './hero-banner';

const linkStatic = 'http://173.249.41.172:9000/mybucket/video.mp4';

const meta: Meta<typeof HeroBanner> = {
  title: 'atoms/HeroBanner',
  component: HeroBanner,
  tags: ['autodocs'],
  args: {
    backgroundImage: linkStatic,
    heightClass: 'h-96',
    overlayEnabled: true,
    overlayColor: 'bg-black',
    overlayOpacity: 'bg-opacity-50',
    className: 'relative flex items-center justify-center text-white',
    children: (
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với Estate</h1>
        <p className="text-lg">Khám phá những bất động sản tuyệt vời nhất</p>
      </div>
    )
  }
};

export default meta;

type Story = StoryObj<typeof HeroBanner>;

export const Default: Story = {};
