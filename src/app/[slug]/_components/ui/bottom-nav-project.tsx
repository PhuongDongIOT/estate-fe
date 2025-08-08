'use client';

import React, { useState } from 'react';

import { BottomNavBar, Tab } from '@/components/molecules/bottom-nav-bar/bottom-nav-bar';

export const BottomNavProject: React.FC = () => {
  const [active, setActive] = useState('fontColor');
  const tabs: Tab[] = [
    { key: 'creator', label: 'Creator.', badge: 'NEW' },
    { key: 'fontColor', label: 'Font & Color' },
    { key: 'details', label: 'Details' },
    { key: 'score', label: 'Score', disabled: false }
  ];

  return (
    <BottomNavBar
      tabs={tabs}
      activeTab={active}
      onTabChange={(k) => setActive(k)}
      visitSiteHref="/xxx"
      visitSiteLabel="Visit Site"
      variant="dark"
    />
  );
};
