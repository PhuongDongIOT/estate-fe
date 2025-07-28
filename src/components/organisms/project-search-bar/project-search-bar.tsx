'use client';

import React, { useState } from 'react';

type TabItem = {
  label: string;
  value: string;
};

type FilterOption = {
  label: string;
  value: string;
};

type FilterGroup = {
  name: string;
  placeholder: string;
  options: FilterOption[];
};

export type ProjectSearchBarProps = {
  tabs: TabItem[];
  defaultTab?: string;
  searchPlaceholder?: string;
  onSearch?: (searchText: string, filters: Record<string, string>, activeTab: string) => void;
  filters: FilterGroup[];
};

export const ProjectSearchBar: React.FC<ProjectSearchBarProps> = ({
  tabs,
  defaultTab,
  searchPlaceholder = 'Tìm kiếm trên toàn quốc',
  onSearch,
  filters
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].value);
  const [searchText, setSearchText] = useState('');
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});

  const handleFilterChange = (name: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    if (onSearch) onSearch(searchText, filterValues, activeTab);
  };

  return (
    <div className="bg-slate-100/10 px-12 py-8 max-w-4xl w-full mx-auto text-white">
      <div className="flex space-x-1 w-full overflow-x-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 font-medium outline-none text-xs md:text-sm ${
              activeTab === tab.value
                ? 'bg-slate-200/30 text-white'
                : 'bg-slate-200/20 text-gray-300 hover:bg-slate-700 shadow-md '
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row mb-4 gap-2 md:gap-0">
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-grow p-3 text-black placeholder-gray-500 outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white py-2 px-5 font-medium hover:bg-indigo-700"
        >
          Tìm kiếm
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {filters.map((filter) => (
          <select
            key={filter.name}
            value={filterValues[filter.name] || ''}
            onChange={(e) => handleFilterChange(filter.name, e.target.value)}
            className="bg-indigo-400/50 text-white p-3 w-full outline-none"
          >
            <option value="">{filter.placeholder}</option>
            {filter.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};
