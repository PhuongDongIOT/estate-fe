import type { Meta, StoryObj } from '@storybook/react';

import { AudioPlaylist } from './audio-playlist';

const linkStatic = 'http://173.249.41.172:9000/mybucket/memory.mp3';

const meta: Meta<typeof AudioPlaylist> = {
  title: 'molecules/AudioPlaylist',
  component: AudioPlaylist,
  tags: ['autodocs'],
  args: {
    songs: [
      { title: 'Memory', src: linkStatic },
      { title: 'Another Song', src: linkStatic }
    ],
    className: 'audio-playlist',
    mobileClassName: 'audio-playlist-mobile',
    desktopClassName: 'audio-playlist-desktop',
    audioProps: {
      controls: true,
      autoPlay: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof AudioPlaylist>;

export const Default: Story = {};
