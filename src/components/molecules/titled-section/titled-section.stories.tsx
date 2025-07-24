import type { Meta, StoryObj } from '@storybook/react';

import { TitledSection } from './titled-section';

const meta: Meta<typeof TitledSection> = {
  title: 'molecules/TitledSection',
  component: TitledSection,
  tags: ['autodocs'],
  args: {
    title: 'Section Title',
    children: (
      <div>
        <p>This is the content of the titled section.</p>
        <p>It can contain any React nodes, such as text, images, or other components.</p>
      </div>
    )
  }
};

export default meta;

type Story = StoryObj<typeof TitledSection>;

export const Default: Story = {};
