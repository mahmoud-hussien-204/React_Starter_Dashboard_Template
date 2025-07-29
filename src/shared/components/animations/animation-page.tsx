import React from 'react';

import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const AnimationPage = ({ children }: React.PropsWithChildren) => {
  return (
    <motion.section
      variants={pageVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.section>
  );
};

export default AnimationPage;
