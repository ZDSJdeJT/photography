import { Fade } from 'react-awesome-reveal';

import { features } from '@/config/home';

const Features = () => {
  return (
    <section className="pb-12 lg:py-24">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
          <h2 className="section-title mx-auto mb-2 lg:mb-3">主要功能</h2>
        </Fade>
        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
              <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                快速导航到您需要的任何东西
              </p>
            </Fade>
            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
              <p className="mt-6 text-lg leading-8 text-black dark:text-white">
                它提供了丰富且极具实用性的元素和功能，让建站变得轻而易举。现在就开始吧，亲自体验如何轻松创建你一直想要的网站。
              </p>
            </Fade>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <Fade
              direction="up"
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce
            >
              {features.map((feature, index) => (
                <dl
                  key={index}
                  className="relative transition-all lg:hover:scale-110"
                >
                  <dt className="text-base font-semibold leading-7 text-muted-foreground">
                    <div className="mb-4 flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-primary">
                      <feature.icon
                        size={36}
                        className="text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-black dark:text-white">
                      {feature.name}
                    </div>
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    {feature.description}
                  </dd>
                </dl>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };
