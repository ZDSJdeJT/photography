import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ErrorCard } from '@/components/error-card';

export default function NotFound() {
  return (
    <ErrorCard title="出错了😅" description="未找到页面。">
      <Button asChild>
        <Link href="/">回到首页</Link>
      </Button>
    </ErrorCard>
  );
}
