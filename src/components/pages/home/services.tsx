import { Fade } from 'react-awesome-reveal';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services } from '@/config/home';

const Services = () => {
  return (
    <section className="mb-12 lg:mb-36">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
          <h2 className="section-title mx-auto mb-6 lg:mb-24">我们的服务</h2>
        </Fade>
        <div className="grid justify-center gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-24">
          <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative flex h-[450px] w-full max-w-[425px] cursor-pointer flex-col items-center justify-center pb-10 transition-all duration-700 hover:bg-muted"
              >
                <CardHeader className="text-primary">
                  <div className="absolute -bottom-6 right-6 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary text-white">
                    <service.icon size={48} />
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{service.name}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export { Services };
