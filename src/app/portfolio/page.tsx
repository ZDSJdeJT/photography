import type { Metadata } from 'next';
import { Fade } from 'react-awesome-reveal';

import { PortfolioTabs } from '@/components/pages/portfolio/portfolio-tabs';

export const metadata: Metadata = {
  title: '作品集',
};

export default function Portfolio() {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
          <h2 className="section-title mx-auto mb-8 lg:mb-16">作品集</h2>
        </Fade>
        <PortfolioTabs />
      </div>
    </section>
  );
}
