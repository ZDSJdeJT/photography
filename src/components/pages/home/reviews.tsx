'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Fade } from 'react-awesome-reveal';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { reviews } from '@/config/home';

const Reviews = () => {
  return (
    <section className="mb-12 lg:mb-32">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce>
          <h2 className="section-title mx-auto mb-12">客户的评价</h2>
        </Fade>
        <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
          <Carousel
            className="mx-auto w-full"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            opts={{ loop: true }}
          >
            <CarouselContent className="-ml-1">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="min-h-[300px] p-8">
                      <CardHeader className="mb-3 p-0">
                        <div className="flex flex-col items-start gap-x-4">
                          <Image
                            src={review.image}
                            width={70}
                            height={70}
                            alt={review.name}
                            priority
                            className="mb-2"
                          />
                          <div className="flex flex-col">
                            <CardTitle>{review.name}</CardTitle>
                            <p>{review.job}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardDescription className="text-lg text-muted-foreground">
                        {review.description}
                      </CardDescription>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Fade>
      </div>
    </section>
  );
};

export { Reviews };
