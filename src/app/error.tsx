'use client';

import Link from 'next/link';

import { ErrorCard } from '@/components/error-card';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorCard title="出错了😭" description={error.message}>
      <div className="flex gap-x-2">
        <Button onClick={() => reset()}>重试</Button>
        <Button asChild>
          <Link href="/">回到首页</Link>
        </Button>
      </div>
    </ErrorCard>
  );
}
