import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

const HeroImage = (props: {
  containerClassName?: string;
  src: StaticImport;
  alt: string;
}) => {
  return (
    <div className={props.containerClassName}>
      <Image src={props.src} alt={props.alt} fill priority />
    </div>
  );
};

export { HeroImage };
