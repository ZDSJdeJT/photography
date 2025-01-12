import { Confetti } from '@/components/pages/home/confetti';
import { Faq } from '@/components/pages/home/faq';
import { Features } from '@/components/pages/home/features';
import { Gallery } from '@/components/pages/home/gallery';
import { Hero } from '@/components/pages/home/hero';
import { Newsletter } from '@/components/pages/home/newsletter';
import { Reviews } from '@/components/pages/home/reviews';
import { Services } from '@/components/pages/home/services';

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
