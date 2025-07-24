import type { Meta, StoryObj } from '@storybook/react';

import { BackgroundVideo } from './background-video';

const linkStatic = 'http://173.249.41.172:9000/mybucket/video.mp4';

const meta: Meta<typeof BackgroundVideo> = {
  title: 'atoms/BackgroundVideo',
  component: BackgroundVideo,
  tags: ['autodocs'],
  args: {
    mobileSrc: linkStatic,
    desktopSrc: linkStatic,
    overlayOpacity: 0.4
  }
};

export default meta;

type Story = StoryObj<typeof BackgroundVideo>;

export const Default: Story = {};
