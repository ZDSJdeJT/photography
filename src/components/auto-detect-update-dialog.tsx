'use client';

import { useState, useEffect } from 'react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { NOTIFY_AFTER_TIMESTAMP_KEY } from '@/constants';

let cache: string | undefined;

const shouldUpdate = async (): Promise<boolean> => {
  const resp = await fetch(
    `${location.origin}${location.pathname}?timestamp=${Date.now()}`,
  );
  const html = await resp.text();
  if (cache) {
    if (html === cache) {
      return false;
    }
    return true;
  }
  cache = html;
  return false;
};

const detect = async (notify: () => void) => {
  const notifyAfterTimestamp = localStorage.getItem(NOTIFY_AFTER_TIMESTAMP_KEY);
  if (notifyAfterTimestamp && Date.now() <= Number(notifyAfterTimestamp)) {
    return;
  }
  if (!(await shouldUpdate())) {
    return;
  }
  notify();
};

const ignoreHours = 24;

const AutoDetectUpdateDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const notify = () => {
    setIsDialogOpen(true);
  };

  useEffect(() => {
    detect(notify);
    const interval = setInterval(
      () => {
        detect(notify);
      },
      1000 * 60 * 5 /* 5 分钟 */,
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>提示</DialogTitle>
          <DialogDescription>
            检测到版本更新，是否刷新页面以更新到最新版本？
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              关闭
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              localStorage.setItem(
                NOTIFY_AFTER_TIMESTAMP_KEY,
                String(Date.now() + 1000 * 60 * 60 * ignoreHours),
              );
              setIsDialogOpen(false);
            }}
          >
            {ignoreHours} 小时内不再提示
          </Button>
          <Button
            type="button"
            onClick={() => {
              location.reload();
            }}
          >
            确定
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { AutoDetectUpdateDialog };
