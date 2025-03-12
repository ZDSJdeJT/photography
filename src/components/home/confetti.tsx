'use client';

import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

import { randomInRange } from '@/lib/utils';

const Confetti = () => {
  return (
    <Fireworks
      onInit={({ confetti }) => {
        confetti({
          angle: randomInRange(55, 125),
          spread: randomInRange(50, 70),
          particleCount: randomInRange(50, 100),
          origin: { y: 0.6 },
          colors: [
            'primary',
            'secondary',
            'muted',
            'accent',
            'destructive',
          ].map((item) =>
            getComputedStyle(document.documentElement).getPropertyValue(
              `--${item}`,
            ),
          ),
        });
      }}
    />
  );
};

export { Confetti };
