import type { Metadata } from 'next';
import { Fade } from 'react-awesome-reveal';

import { ContactForm } from '@/components/pages/contact/contact-form';

export const metadata: Metadata = {
  title: '联系',
};

export default function Contact() {
  return (
    <section className="container mx-auto">
      <div className="mb-6 grid pt-12 lg:mb-24 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
            <div className="mb-4 flex items-center gap-x-4 text-lg text-primary">
              <span className="h-[2px] w-[30px] bg-primary"></span>
              您好
            </div>
          </Fade>
          <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
            <h1 className="mb-8 max-w-md">让我们一起携手</h1>
          </Fade>
          <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
            <p className="subtitle max-w-[400px]">
              在这个瞬息万变的世界里，携手同行让每一步都充满力量。无论前路如何，我们都可以一起迎接挑战，肩并肩走向更加光明的未来。相信彼此，支持彼此，在彼此的陪伴中，我们将创造出更美好的明天。
            </p>
          </Fade>
        </div>
        <div className="lg:mt-24">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
