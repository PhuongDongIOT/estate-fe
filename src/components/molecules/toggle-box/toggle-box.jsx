'use client';

import { useSpring, animated, config } from '@react-spring/web';
import { useState } from 'react';

export function ToggleBox() {
  const [open, setOpen] = useState(false);

  const styles = useSpring({
    height: open ? 100 : 0,
    opacity: open ? 1 : 0,
    scale: open ? 1 : 0.95,
    boxShadow: open ? '0 8px 24px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.05)',
    background: open ? '#e0f7fa' : '#f0f0f0',
    config: config.gentle,
    overflow: 'hidden'
  });

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          padding: '10px 24px',
          borderRadius: 8,
          border: 'none',
          background: open ? '#00bcd4' : '#607d8b',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          transition: 'background 0.3s'
        }}
      >
        {open ? 'Đóng' : 'Mở'}
      </button>
      <animated.div style={styles}>
        <div style={{ padding: 20, borderRadius: 12 }}>Nội dung</div>
      </animated.div>
    </div>
  );
}
