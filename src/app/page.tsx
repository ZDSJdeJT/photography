import { Confetti } from '@/components/home/confetti';
import { Faq } from '@/components/home/faq';
import { Features } from '@/components/home/features';
import { Gallery } from '@/components/home/gallery';
import { Hero } from '@/components/home/hero';
import { Newsletter } from '@/components/home/newsletter';
import { Reviews } from '@/components/home/reviews';
import { Services } from '@/components/home/services';

export default function Home() {
  return (
    <>
      <Confetti />
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <Reviews />
      <Faq />
      <Newsletter />
    </>
  );
}
