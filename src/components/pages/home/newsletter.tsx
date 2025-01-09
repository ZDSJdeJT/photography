import Link from 'next/link';
import { RiMenFill } from 'react-icons/ri';
import { Fade } from 'react-awesome-reveal';

import { Button } from '@/components/ui/button';
import { articles } from '@/config/home';

const Newsletter = () => {
  return (
    <section>
      <div className="relative overflow-hidden bg-secondary py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="lg:max-w-lg">
              <Fade
                direction="up"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce
              >
                <h2 className="section-title mx-auto">需要一个摄影师？</h2>
              </Fade>
              <Fade
                direction="up"
                delay={600}
                cascade
                damping={1e-1}
                triggerOnce
              >
                <p className="subtitle mt-4 text-lg leading-8">
                  不论是个人写真、婚礼纪实、产品摄影，还是商业广告，我们的专业摄影师团队都能为您提供定制化的拍摄服务。我们拥有丰富的拍摄经验和创意视角，致力于捕捉最真实、最美丽的瞬间，帮助您的品牌、活动或个人形象提升至新的高度。
                </p>
              </Fade>
              <Fade
                direction="up"
                delay={800}
                cascade
                damping={1e-1}
                triggerOnce
              >
                <div>
                  <Link href="/contact">
                    <Button className="w-full">
                      订阅 <RiMenFill />
                    </Button>
                  </Link>
                </div>
              </Fade>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <Fade
                direction="up"
                delay={1000}
                cascade
                damping={1e-1}
                triggerOnce
              >
                {articles.map((article, index) => (
                  <dl key={index} className="flex flex-col items-start">
                    <dt>
                      <div className="mb-2 w-fit rounded-full bg-primary p-2 ring-1 ring-white/10">
                        <article.icon className="h-6 w-6" />
                      </div>
                      <span className="mt-4 font-semibold text-muted-foreground">
                        {article.name}
                      </span>
                    </dt>
                    <dd className="mt-2 leading-7">{article.description}</dd>
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

export { Newsletter };
