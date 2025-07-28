import type { Meta, StoryObj } from '@storybook/react';

import { HighlightTopicList } from './highlight-topic-list';

const highlightTopicData = {
  title: 'Chủ đề nổi bật',
  topics: [
    { title: 'Tin tức bất động sản', href: '/tin-tuc-bds' },
    { title: 'Bất động sản Hà Nội', href: '/bds-ha-noi' },
    { title: 'Bất động sản Hồ Chí Minh', href: '/bds-ho-chi-minh' },
    { title: 'Báo cáo thị trường', href: '/bao-cao-thi-truong' },
    { title: 'Mua bất động sản', href: '/mua-bds' }
  ],
  moreLink: '/tat-ca-chu-de'
};

const meta: Meta<typeof HighlightTopicList> = {
  title: 'molecules/HighlightTopicList',
  component: HighlightTopicList,
  tags: ['autodocs'],
  args: {
    ...highlightTopicData
  }
};

export default meta;

type Story = StoryObj<typeof HighlightTopicList>;

export const Default: Story = {};
