import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { RiMenFill } from 'react-icons/ri';

import photography from '@/assets/pages/home/hero/photography.svg';
import { Button } from '@/components/ui/button';
import { SparklesText } from '@/components/magic-ui/sparkles-text';
import { HeroImage } from '@/components//hero-image';
import { Mark } from '@/components//home/mark';
import { Socials } from '@/components/layouts/socials';
import { marks } from '@/config/home';

const Hero = () => {
  return (
    <section className="h-[auto] bg-bottom py-12 lg:py-24">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="mx-auto flex max-w-[800px] flex-col justify-center text-center lg:mx-0 lg:text-left">
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
              <div className="motion-preset-seesaw mb-4 text-sm font-semibold tracking-[4px] text-primary">
                摄影
              </div>
            </Fade>
            <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
              <SparklesText
                className="motion-preset-oscillate"
                text="创造令人惊奇的作品！"
              />
            </Fade>
            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
              <p className="subtitle mx-auto mt-4 max-w-[590px] lg:mx-0">
                我们是一群来自南京的摄影师，专注于艺术、人像和自然风光摄影。我们热爱通过自然光和中画幅胶片捕捉生活中的细腻瞬间。
              </p>
            </Fade>
            <Fade
              direction="up"
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce
            >
              <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row lg:mx-0">
                <div className="w-full">
                  <Link href="/contact">
                    <Button className="gap-x-2">
                      订阅 <RiMenFill />
                    </Button>
                  </Link>
                </div>
              </div>
            </Fade>
            <Fade
              direction="up"
              delay={1200}
              cascade
              damping={1e-1}
              triggerOnce
            >
              <Socials
                containerClassName="flex gap-x-6 mx-auto lg:mx-0"
                iconClassName="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </Fade>
          </div>
          <Fade direction="down" delay={600} cascade damping={1e-1} triggerOnce>
            <div className="relative hidden lg:flex">
              <HeroImage
                containerClassName="w-[550px] h-[475px] relative bg-bottom bg-no-repeat"
                src={photography}
                alt="photography"
              />
            </div>
          </Fade>
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <Fade
                direction="up"
                delay={800}
                cascade
                damping={1e-1}
                triggerOnce
              >
                {marks.map((mark, index) => (
                  <dl
                    key={index}
                    className="mx-auto flex max-w-xs flex-col gap-y-4"
                  >
                    <dt className="text-base leading-7">{mark.description}</dt>
                    <dd className="order-first mx-auto text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      <Mark
                        endCountNum={mark.endCountNum}
                        endCountText={mark.endCountText}
                      >
                        <mark.icon />
                      </Mark>
                    </dd>
                  </dl>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
