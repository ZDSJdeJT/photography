'use client';

import { motion } from 'framer-motion';

export default function RootTemplate(props: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={{
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
      }}
      initial="hidden"
      animate="enter"
      transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
      className="font-[family-name:var(--font-noto-mono)]"
    >
      {props.children}
    </motion.main>
  );
}
