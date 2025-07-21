'use client';

import { animated, useSpring } from '@react-spring/web';
import { ReactNode } from 'react';

type AnimationProps = {
  isVisible: boolean;
  children?: ReactNode;
};
export function Animation({ isVisible, children }: AnimationProps) {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24
  });

  return <animated.div style={styles}>{children}</animated.div>;
}
