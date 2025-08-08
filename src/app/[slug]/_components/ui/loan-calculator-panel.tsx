'use client';

import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

import { LoanCalculator } from './loan-calculator';

type Props = {
  className?: string;
};

const LoanCalculatorPanel = ({ className }: Props) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Animate open/close
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (isOpen) {
      gsap.to(panel, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power4.out',
        pointerEvents: 'auto'
      });
    } else {
      gsap.to(panel, {
        x: '100%',
        opacity: 0,
        duration: 0.5,
        ease: 'power3.inOut',
        pointerEvents: 'none'
      });
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="max-w-12 text-xs fixed z-50 bottom-36 right-0 bg-blue-600 text-white px-2 py-2 shadow-lg hover:bg-blue-700 transition"
      >
        {isOpen ? 'Đóng lại' : 'Tính vay'}
      </button>

      <div
        ref={panelRef}
        className="fixed z-40 bottom-36 right-0 w-[90vw] max-w-4xl translate-x-full opacity-0 pointer-events-none shadow-2xl"
      >
        <LoanCalculator className={className || ''} />
      </div>
    </>
  );
};

export default LoanCalculatorPanel;
