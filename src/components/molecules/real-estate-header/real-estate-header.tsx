'use client';

import { MapPin } from 'lucide-react';
import React from 'react';

type Tab = {
  label: string;
  onClick?: () => void;
  active?: boolean;
  icon?: React.ReactNode;
};

type RealEstateHeaderProps = {
  title: string;
  subtitle: string;
  tabs: Tab[];
};

export const RealEstateHeader: React.FC<RealEstateHeaderProps> = ({ title, subtitle, tabs }) => {
  return (
    <div className="grid grid-cols-3 gap-3 p-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          {title}
        </h1>
        <div className="flex items-center text-gray-500 mt-1">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{subtitle}</span>
        </div>
      </div>

      <div className="col-span-2 flex gap-3 mt-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              if (tab.onClick) tab.onClick();
            }}
            className={`flex items-center gap-2 px-5 py-2 rounded-sm text-sm font-medium transition-all duration-200 shadow-sm
              ${
                tab.active
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:shadow'
              }
            `}
          >
            {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
