import React from 'react';

export type BranchLocationCardProps = {
  title: string;
  address: string;
  hotline?: string;
  children?: React.ReactNode;
};

export const BranchLocationCard = ({
  title,
  address,
  hotline,
  children
}: BranchLocationCardProps) => {
  return (
    <div className="hover:shadow-sm w-full">
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 whitespace-pre-line">{address}</p>
      {hotline && (
        <p className="text-sm text-gray-600">
          <strong>Hotline:</strong> {hotline}
        </p>
      )}
      {children && <div>{children}</div>}
    </div>
  );
};
