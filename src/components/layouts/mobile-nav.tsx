import { AlignJustify } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from '@/components/layouts/logo';
import { Nav } from '@/components/layouts/nav';
import { Socials } from '@/components/layouts/socials';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <AlignJustify />
          <span className="sr-only">打开菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="font-[family-name:var(--font-noto-sans)]">
        <SheetHeader className="sr-only">
          <SheetTitle>导航</SheetTitle>
          <SheetDescription>快速访问主要功能</SheetDescription>
        </SheetHeader>
        <div className="flex h-full flex-col items-center justify-between py-8">
          <div className="flex flex-col items-center gap-y-28">
            <Logo />
            <Nav
              containerClassName="flex flex-col items-center gap-y-6"
              linkClassName="text-xl"
            />
          </div>
          <Socials containerClassName="flex gap-x-4" iconClassName="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { MobileNav };
