import { Fade } from 'react-awesome-reveal';

import { Project } from '@/components/pages/home/project';
import { projects } from '@/config/home';

const Gallery = () => {
  return (
    <section className="relative mb-12 lg:mb-48">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
          <h2 className="section-title mx-auto mb-8 lg:mb-16">我的画廊</h2>
        </Fade>
        <div className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-24">
          <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export { Gallery };
