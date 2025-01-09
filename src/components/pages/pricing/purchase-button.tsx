'use client';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

const PurchaseButton = () => (
  <Button
    className="mt-3 gap-x-2"
    onClick={() => {
      toast.success('订阅成功', {
        description: new Date().toLocaleString(),
      });
    }}
  >
    订阅
  </Button>
);

export { PurchaseButton };
