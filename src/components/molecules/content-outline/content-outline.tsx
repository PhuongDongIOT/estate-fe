import React from 'react';

type TOCItem = {
  id: string;
  title: string;
};

type TableOfContentsProps = {
  title?: string;
  items: TOCItem[];
  className?: string;
};

export const ContentOutline: React.FC<TableOfContentsProps> = ({
  title = 'Mục lục bài viết',
  items,
  className = ''
}) => {
  return (
    <nav
      className={`border-t-[1px] border-b-[1px] border-gray-200 bg-white p-4 text-sm ${className}`}
    >
      <h2 className="text-base font-semibold mb-3">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-gray-700 hover:text-blue-600 transition-colors">
              {index + 1}. {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
