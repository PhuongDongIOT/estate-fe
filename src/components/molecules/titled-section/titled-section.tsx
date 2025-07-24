import React from 'react';

type TitledSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const TitledSection: React.FC<TitledSectionProps> = ({ title, children }) => {
  return (
    <div className="w-full pb-4 px-4">
      <div className="pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-1 pr-16 border-b-2 border-gray-200 inline-block">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </div>
  );
};
