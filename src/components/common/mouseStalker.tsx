import React, { useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

const mouseStalkerStyles = {
  width: 30,
  height: 30,
  borderRadius: 15,
  zIndex: 999,
};

export default function MouseStalker() {
  const [springStyles, setSpringStyles] = useSpring(() => ({
    to: {
      top: 860,
      left: 540,
    },
    config: {
      frequency: 0.5,
      damping: 2,
    },
  }));

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setSpringStyles.start({
        top: e.y - mouseStalkerStyles.height / 2,
        left: e.x - mouseStalkerStyles.width / 2,
      });
    });
  });

  return (
    <animated.div
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        backgroundColor: '#00000080',
        ...mouseStalkerStyles,
        ...springStyles,
      }}
    />
  );
}
