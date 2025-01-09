'use client';

import { useScrollProgress } from '@/hooks/use-scroll-progress';

const ScrollProgress = () => {
  const completion = useScrollProgress();

  return (
    <span
      className="fixed bottom-0 right-0 top-0 z-50 w-1 bg-primary transition-all duration-1000"
      style={{ transform: `translateY(${completion - 100}%)` }}
    ></span>
  );
};

export { ScrollProgress };
