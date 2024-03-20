'use client';

import { motion, useScroll } from 'framer-motion';
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 w-full bg-primary h-1 z-[100] origin-left bg-progress-gradient"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
