import { Fade } from 'react-awesome-reveal';

import { Socials } from '@/components/layouts/socials';

const Footer = () => {
  return (
    <footer className="bg-primary-foreground py-12 font-[family-name:var(--font-noto-sans)]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
            <Socials
              containerClassName="flex gap-x-6 mx-auto lg:mx-0 mb-4"
              iconClassName="text-[20px] transition-all hover:text-black/70 dark:hover:text-white/70"
            />
          </Fade>
          <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
            <p>
              {`Copyright © ${new Date().getFullYear()}, All Rights Reserved.`}
            </p>
          </Fade>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
