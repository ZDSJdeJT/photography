import { useState, useEffect } from 'react';
import { useThrottleFn } from 'ahooks';

export const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  const { run: updateScrollCompletion } = useThrottleFn(
    () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Math.round((currentProgress / scrollHeight) * 100));
      }
    },
    { wait: 50 },
  );

  useEffect(() => {
    window.addEventListener('scroll', updateScrollCompletion);

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  }, [updateScrollCompletion]);

  return completion;
};
