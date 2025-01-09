'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { menu } from '@/config/menu';
import { cn } from '@/lib/utils';

const Nav = (props: {
  containerClassName?: string;
  linkClassName?: string;
  underlineClassName?: string;
}) => {
  const pathname = usePathname();

  return (
    <nav className={props.containerClassName}>
      {menu.map((link, index) => {
        const isCurrent = link.path === pathname;

        return (
          <Link
            key={index}
            href={link.path}
            className={cn(props.linkClassName, isCurrent && 'text-primary')}
          >
            {isCurrent && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={props.underlineClassName}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export { Nav };
