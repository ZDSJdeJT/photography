import { Fade } from 'react-awesome-reveal';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faq } from '@/config/home';

const Faq = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mb-6 w-full lg:mb-24">
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
            <h2 className="section-title mx-auto mb-12">我们的工作室</h2>
          </Fade>
          <div>
            <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem key={index} value={String(index)}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Faq };
