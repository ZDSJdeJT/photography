'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

import { randomInRange } from '@/lib/utils';

const Confetti = () => {
  useEffect(() => {
    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
      colors: ['primary', 'secondary', 'muted', 'accent', 'destructive'].map(
        (item) =>
          getComputedStyle(document.documentElement).getPropertyValue(
            `--${item}`,
          ),
      ),
    });
  }, []);

  return null;
};

export { Confetti };
