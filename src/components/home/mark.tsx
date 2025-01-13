'use client';

import CountUp from 'react-countup';

import { cn } from '@/lib/utils';

const Mark = (props: {
  containerClassName?: string;
  children: React.ReactNode;
  endCountNum: number;
  endCountText: string;
  text?: string;
}) => {
  return (
    <div className={cn('mark', props.containerClassName)}>
      <div className="text-3xl text-white">{props.children}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl font-bold leading-none text-white">
          <CountUp end={props.endCountNum} delay={1} duration={4} />
          {props.endCountText}
        </div>
        <div className="max-w-[70px] text-[15px] font-medium leading-none text-black">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export { Mark };
