'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedHeadingProps = {
  head: string;
  title: ReactNode;
  subtitle?: string;
  search?: ReactNode;
};

const AnimatedHeading = ({
  head,
  title,
  subtitle,
  search,
}: AnimatedHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="Heading inline-flex w-full flex-col items-center justify-start px-4 py-7 tablet:px-[140px] tablet:py-12 laptop:px-[184px] laptop:py-16"
    >
      <div className="Typography flex flex-col items-center justify-start">
        <div className="main flex flex-col items-center justify-start gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="Portfolio text-center text-lg font-normal leading-6 text-secondary-900 dark:text-secondary-50 tablet:text-xl tablet:font-bold tablet:leading-7 laptop:text-2xl"
          >
            {head}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-4xl font-bold leading-[44px] tablet:text-[60px] tablet:font-medium tablet:leading-[64px] laptop:text-7xl laptop:leading-[84px]"
          >
            {title}
          </motion.p>
          {subtitle ? (
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-xs text-center text-base font-medium leading-6 text-gray-700 dark:text-gray-300 tablet:max-w-[600px] tablet:text-lg tablet:leading-6 laptop:max-w-[660px] laptop:text-xl laptop:leading-7"
            >
              {subtitle}
            </motion.p>
          ) : null}
          {search ? (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 w-full max-w-[820px] desktop:mt-6"
            >
              {search}
            </motion.div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedHeading;
