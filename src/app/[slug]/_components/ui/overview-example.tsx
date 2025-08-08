'use client';

import ProjectOverview from '@/components/organisms/project-overview/project-overview';

type StatItem = {
  label: string;
  value: string;
  highlight?: boolean;
};

type Badge = {
  text: string;
  variant?: 'primary' | 'success' | 'warning' | 'outline';
};

const projectData = {
  logoUrl: '/images/estate.jpg',
  title: 'Khu đô thị Vinhomes Riverside',
  subtitle: 'Long Biên, Hà Nội',
  fullAddress: 'Đường Lệ Mật, quận Long Biên',
  status: 'Đang triển khai',
  rating: 4.3,
  reviewsCount: 128,
  priceRange: '2.5 - 5 tỷ',
  completionDate: 'Q4 2025',
  stats: [
    { label: 'Diện tích', value: '299 ha' },
    { label: 'Mật độ xây dựng', value: '40 %' },
    { label: 'Chủ đầu tư', value: 'Tập đoàn Vingroup', highlight: true },
    {
      label: 'Đơn vị thi công',
      value: 'Công ty Cổ phần xây dựng Cotec (Cotecons)'
    }
  ] as StatItem[],
  progressPercent: 45,
  tags: ['View sông', 'Gần metro', 'An ninh 24/7', 'Cảnh quan đẹp'],
  badges: [
    { text: 'HOT', variant: 'warning' },
    { text: 'Top 1', variant: 'primary' }
  ] as Badge[]
  // onViewDetails: () => console.log("Xem chi tiết"),
  // onContact: () => console.log("Liên hệ"),
};

export function OverviewExample() {
  return <ProjectOverview {...projectData} />;
}
