'use client';

import { socials } from '@/config/socials';
import { cn } from '@/lib/utils';

const Socials = (props: {
  containerClassName?: string;
  iconClassName?: string;
}) => {
  return (
    <div className={props.containerClassName}>
      {socials.map((item, index) => (
        <item.icon
          key={index}
          className={cn(props.iconClassName, 'cursor-pointer')}
          onClick={() => {
            window.open(item.path);
          }}
        />
      ))}
    </div>
  );
};

export { Socials };
