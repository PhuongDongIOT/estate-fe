import React from 'react';

export interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

export type ContactInfoProps = {
  contacts: ContactItem[];
};

export const ContactInfo: React.FC<ContactInfoProps> = ({ contacts }) => {
  return (
    <div className="flex flex-wrap gap-10 p-4 rounded-md">
      {contacts.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 hover:scale-110 transition-all duration-150"
        >
          <div>{item.icon}</div>
          <div className="flex flex-col text-sm">
            <span className="text-gray-500">{item.label}</span>
            {item.link ? (
              <a
                href={item.link}
                className="font-semibold text-gray-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.value}
              </a>
            ) : (
              <span className="font-semibold text-gray-800">{item.value}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
