import type { Meta, StoryObj } from '@storybook/react';

import { ProjectSearchBar } from './project-search-bar';

const meta: Meta<typeof ProjectSearchBar> = {
  title: 'molecules/ProjectSearchBar',
  component: ProjectSearchBar,
  tags: ['autodocs'],
  args: {
    tabs: [
      { label: 'Tất cả', value: 'all' },
      { label: 'Nhà ở', value: 'housing' },
      { label: 'Đất nền', value: 'land' },
      { label: 'Dự án', value: 'project' }
    ],
    defaultTab: 'all',
    searchPlaceholder: 'Tìm kiếm dự án, nhà ở, đất nền...',
    filters: [
      {
        name: 'location',
        placeholder: 'Chọn vị trí',
        options: [
          { label: 'Hà Nội', value: 'hanoi' },
          { label: 'TP.HCM', value: 'hcm' },
          { label: 'Đà Nẵng', value: 'danang' }
        ]
      },
      {
        name: 'price',
        placeholder: 'Khoảng giá',
        options: [
          { label: 'Dưới 1 tỷ', value: '<1billion' },
          { label: '1-3 tỷ', value: '1-3billion' },
          { label: 'Trên 3 tỷ', value: '>3billion' }
        ]
      }
    ]
  }
};

export default meta;

type Story = StoryObj<typeof ProjectSearchBar>;

export const Default: Story = {};
