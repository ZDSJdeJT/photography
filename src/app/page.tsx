import { Confetti } from '@/components/pages/home/confetti';
import { Hero } from '@/components/pages/home/hero';
import { Features } from '@/components/pages/home/features';
import { Services } from '@/components/pages/home/services';
import { Gallery } from '@/components/pages/home/gallery';
import { Reviews } from '@/components/pages/home/reviews';
import { Faq } from '@/components/pages/home/faq';
import { Newsletter } from '@/components/pages/home/newsletter';

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
