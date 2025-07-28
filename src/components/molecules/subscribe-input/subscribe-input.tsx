'use client';

import clsx from 'clsx';
import { Send } from 'lucide-react';
import React, { useState } from 'react';

interface SubscribeInputProps {
  title?: string;
  placeholder?: string;
  buttonColor?: string;
  icon?: React.ReactNode;
}

export const SubscribeInput: React.FC<SubscribeInputProps> = ({
  title = 'ĐĂNG KÝ NHẬN TIN',
  placeholder = 'Nhập email của bạn',
  buttonColor = 'bg-red-600 hover:bg-red-700',
  icon = <Send size={16} />
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
  };

  return (
    <div className="p-4 w-full max-w-md">
      <h3 className="text-sm font-semibold text-gray-800 mb-2 uppercase tracking-wide">{title}</h3>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-red-300"
      >
        <input
          type="email"
          required
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-2 text-sm outline-none text-gray-800 placeholder-gray-400 bg-transparent rounded-none"
        />
        <button
          type="submit"
          className={clsx('p-2 text-white transition-colors duration-200', buttonColor)}
        >
          {icon}
        </button>
      </form>
    </div>
  );
};
