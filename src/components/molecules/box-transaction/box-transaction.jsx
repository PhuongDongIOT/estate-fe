'use client';

import { animated, useTransition } from '@react-spring/web';

export function BoxTransaction({ data = [1, 2, 3] }) {
  const transitions = useTransition(data, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
    keys: (item) => item
  });

  return (
    <div className="flex gap-4">
      {transitions((style, item) => (
        <animated.div style={style} key={item}>
          <div className="max-w-md mx-auto my-2 p-6 bg-white rounded-xl shadow-lg">{item}</div>
        </animated.div>
      ))}
    </div>
  );
}
