import clsx from 'clsx';
import React from 'react';

type PostItem = {
  title: string;
  link?: string;
};

type PopularPostsProps = {
  title?: string;
  posts: PostItem[];
  className?: string;
};

const PopularPosts: React.FC<PopularPostsProps> = ({
  title = 'Bài viết được xem nhiều nhất',
  posts,
  className = ''
}) => {
  return (
    <div className={clsx('border-t-[1px] border-b-[1px] border-gray-200 p-4', className)}>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ul className="space-y-3">
        {posts.map((post, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 bg-red-100 text-red-600 flex items-center justify-center text-sm font-semibold">
              {index + 1}
            </div>
            {post.link ? (
              <a
                href={post.link}
                className="text-sm leading-snug text-gray-800 hover:text-blue-600 cursor-pointer"
              >
                {post.title}
              </a>
            ) : (
              <p className="text-sm leading-snug text-gray-800">{post.title}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPosts;
