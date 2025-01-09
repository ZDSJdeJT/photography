'use client';

import { useState, useEffect } from 'react';
import { useThrottleFn } from 'ahooks';

import { cn } from '@/lib/utils';
import { Logo } from '@/components/layouts/logo';
import { Nav } from '@/components/layouts/nav';
import { ThemeToggle } from '@/components/layouts/theme-toggle';
import { MobileNav } from '@/components/layouts/mobile-nav';

const Header = () => {
  const [header, setHeader] = useState(false);

  const { run: updateHeader } = useThrottleFn(
    () => {
      setHeader(window.scrollY > 50);
    },
    { wait: 200 },
  );

  useEffect(() => {
    window.addEventListener('scroll', updateHeader);

    return () => {
      window.removeEventListener('scroll', updateHeader);
    };
  }, [updateHeader]);

  return (
    <header
      className={cn(
        'sticky top-0 z-30 py-4 font-[family-name:var(--font-noto-sans)] backdrop-blur-sm transition-all',
        header && 'shadow-lg',
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerClassName="hidden items-center gap-x-8 lg:flex"
              linkClassName="relative transition-all hover:text-primary"
              underlineClassName="absolute left-0 top-full h-[2px] w-full bg-primary"
            />
            <ThemeToggle />
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
