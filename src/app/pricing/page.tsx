import type { Metadata } from 'next';
import { RiCheckFill } from 'react-icons/ri';
import { Fade } from 'react-awesome-reveal';

import { PurchaseButton } from '@/components/pages/pricing/purchase-button';
import { includedFeatures } from '@/config/pricing';

export const metadata: Metadata = {
  title: '定价',
};

export default function Pricing() {
  return (
    <section className="min-h-screen p-12">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
          <h2 className="section-title mx-auto mb-8 lg:mb-16">定价</h2>
        </Fade>
        <div className="mx-auto max-w-2xl sm:text-center">
          <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              选择最适合你的定价方案
            </h2>
          </Fade>
          <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
            <p className="mt-6 text-lg leading-8">
              我们提供了多种灵活的定价方案，满足不同需求，无论是个人用户还是团队，都能找到合适的选择。
            </p>
          </Fade>
        </div>
        <Fade direction="up" delay={1000} cascade damping={1e-1} triggerOnce>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight">人生套餐</h3>
              <p className="mt-6 text-base leading-7">
                适用于追求长期价值的用户
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                  包含什么？
                </h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-x-3 text-muted-foreground"
                  >
                    <RiCheckFill
                      className="h-6 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-secondary py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold">
                    支付一次，终身受用，享受所有功能和更新。
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight">
                      ￥39.99
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide">
                      CNY
                    </span>
                  </p>
                  <PurchaseButton />
                  <p className="mt-6 text-xs leading-5">为您提供最好的服务。</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
