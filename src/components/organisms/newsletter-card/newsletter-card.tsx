'use client';

import React, { useState } from 'react';

type NewsletterCardProps = {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  checkboxLabel?: string;
  onSubmit?: (email: string) => void;
  customStyles?: {
    wrapper?: string;
    title?: string;
    description?: string;
    input?: string;
    button?: string;
    checkbox?: string;
    checkboxLabel?: string;
  };
};

export const NewsletterCard: React.FC<NewsletterCardProps> = ({
  title = 'Creative Vibes',
  description = 'Luôn cập nhật tin Sáng tạo mới nhất qua Inbox của bạn!',
  placeholder = 'Nhập vào email của bạn',
  buttonText = 'ĐĂNG KÝ',
  checkboxLabel = 'Xác nhận bạn đồng ý nhận tin từ RGB',
  onSubmit,
  customStyles = {}
}) => {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agree && onSubmit) {
      onSubmit(email);
    }
  };

  return (
    <div
      className={`border-t-[1px] border-b-[1px] p-6 text-center max-w-sm mx-auto group ${customStyles.wrapper || ''}`}
    >
      <h2 className={`text-xl font-bold ${customStyles.title || ''}`}>{title}</h2>
      <p className={`mb-2 text-gray-600 text-sm lining-nums ${customStyles.description || ''}`}>
        {description}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="md:px-4">
          <div>
            <input
              type="email"
              placeholder={placeholder}
              className={`text-sm w-full group-hover:border-b-2 group-hover:border-indigo-400 bg-transparent py-2 px-1 text-center focus:outline-none transition-all duration-200 ${customStyles.input || ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={!agree}
          className={`mt-6 w-full bg-black py-2 font-medium ${customStyles.button || ''}`}
        >
          {buttonText}
        </button>
        <div
          className={`mt-4 flex items-center justify-center text-sm text-gray-600 ${customStyles.checkbox || ''}`}
        >
          <input
            id="agree"
            type="checkbox"
            className="mr-2"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="agree" className={customStyles.checkboxLabel}>
            {checkboxLabel}
          </label>
        </div>
      </form>
    </div>
  );
};
