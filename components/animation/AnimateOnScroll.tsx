'use client';

import { useEffect, useState } from 'react';
import { motion, Variants, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimateOnScrollProps = {
  children: React.ReactNode;
  notLazy?: boolean;
  className?: string;
  noScale?: boolean;
  duration?: number;
  threshold?: number;
  x?: number | string;
  y?: number | string;
  scale?: number;
  delay?: number;
};

const AnimateOnScroll = ({
  children,
  notLazy = false,
  className,
  noScale,
  duration = 0.6,
  threshold = 0.1,
  x = 0,
  y = 0,
  scale = 0.7,
  delay = 0.2,
}: AnimateOnScrollProps) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true,
  });

  const [variant, setVariant] = useState('hidden');

  useEffect(() => {
    let timeoutId: number | null;

    const handleAnimation = () => {
      setVariant('visible');
      timeoutId = null;
    };

    if (inView) {
      timeoutId = window.requestAnimationFrame(handleAnimation);
    }

    return () => {
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
    };
  }, [inView]);

  const Variants: Variants = {
    hidden: {
      opacity: 0,
      scale: noScale ? 1 : scale,
      y: y,
      x: x,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        ease: 'easeOut',
        delay: delay,
      },
    },
  };

  return (
    <>
      {notLazy ? (
        <motion.div
          ref={ref}
          variants={Variants}
          initial="hidden"
          animate={variant}
          style={{ willChange: 'transform, opacity' }}
          className={className}
        >
          {children}
        </motion.div>
      ) : (
        <LazyMotion features={domAnimation}>
          <motion.div
            ref={ref}
            variants={Variants}
            initial="hidden"
            animate={variant}
            style={{ willChange: 'transform, opacity' }}
            className={className}
          >
            {children}
          </motion.div>
        </LazyMotion>
      )}
    </>
  );
};

export default AnimateOnScroll;
