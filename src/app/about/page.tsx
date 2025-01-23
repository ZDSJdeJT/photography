import type { Metadata } from 'next';
import { Fade } from 'react-awesome-reveal';

import profile from '@/assets/about/profile.png';
import { HeroImage } from '@/components//hero-image';
import { info } from '@/config/about';

export const metadata: Metadata = {
  title: '关于',
};

export default function About() {
  return (
    <>
      <section className="pb-12 lg:py-24">
        <div className="container mx-auto">
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
            <h2 className="section-title mx-auto mb-8 lg:mb-16">关于</h2>
          </Fade>
          <div className="flex flex-col lg:flex-row">
            <div className="relative mx-auto hidden flex-1 lg:flex">
              <Fade
                direction="down"
                delay={600}
                cascade
                damping={1e-1}
                triggerOnce
              >
                <HeroImage
                  containerClassName="w-[450px] h-[450px] bg-no-repeat relative"
                  src={profile}
                  alt="profile"
                />
              </Fade>
            </div>
            <div className="flex-1">
              <div className="mt-12 text-lg lg:mt-3">
                <div className="text-center lg:text-left">
                  <Fade
                    direction="up"
                    delay={800}
                    cascade
                    damping={1e-1}
                    triggerOnce
                  >
                    <h3 className="mb-4">让我们做一个完美的摄影计划！</h3>
                  </Fade>
                  <Fade
                    direction="up"
                    delay={1000}
                    cascade
                    damping={1e-1}
                    triggerOnce
                  >
                    <p className="subtitle mx-auto max-w-xl lg:mx-0">
                      我们相信摄影不仅仅是拍照，更是与客户共同创造美好回忆的过程。我们将与您密切沟通，了解您的需求和偏好，确保拍摄方案完全符合您的期望。
                    </p>
                  </Fade>
                  <div className="mb-12 grid grid-cols-2 gap-4">
                    <Fade
                      direction="up"
                      delay={1200}
                      cascade
                      damping={1e-1}
                      triggerOnce
                    >
                      {info.map((item, index) => (
                        <div
                          key={index}
                          className="mx-0 flex items-center gap-x-4"
                        >
                          <div className="text-primary">
                            <item.icon />
                          </div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
