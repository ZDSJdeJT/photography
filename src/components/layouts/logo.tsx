import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.svg';

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        width={36}
        height={36}
        priority
        alt="photography-logo"
      />
    </Link>
  );
};

export { Logo };
