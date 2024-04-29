/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div
      className="inline-flex max-w-[600px] flex-col items-start justify-center gap-6 pt-6 tablet:pt-4 desktop:gap-16 desktop:pt-0"
      role="banner"
    >
      <header className="flex flex-col justify-start gap-4 desktop:gap-12">
        <motion.p
          initial={{ opacity: 0, y: 40, scale: 0.9, x: '-10%' }}
          animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold leading-10 tablet:text-5xl tablet:font-extrabold tablet:leading-[68px] desktop:text-start desktop:text-7xl desktop:leading-[84px]"
          tabIndex={0}
        >
          Hello, I'm <br />
          <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent">
            Aga Kadela
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40, scale: 0.9, x: '-10%' }}
          animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg font-medium leading-normal text-gray-600 dark:text-gray-300 tablet:text-xl desktop:text-start desktop:leading-7"
          tabIndex={0}
        >
          A programmer, entrepreneur, and dedicated educator with a passionate
          mission: empowering women in tech. As the visionary behind Coder Woman
          and Dotty, I'm committed to unleashing the full potential of women as
          coding superheroes.
        </motion.p>
      </header>
      <motion.nav
        initial={{ opacity: 0, y: 40, scale: 0.9, x: '-10%' }}
        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex w-full items-start justify-center space-x-4 desktop:justify-start desktop:space-x-8"
      >
        <Link
          href="#projects"
          className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary-700 px-3 py-2 text-primary-900 transition-colors duration-300 ease-out hover:border-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200 tablet:px-5 tablet:py-2.5 desktop:rounded-2xl desktop:px-7 desktop:py-[18px]"
          aria-label="View my work"
        >
          <p className="text-center text-base font-bold leading-loose tracking-wider tablet:text-lg desktop:text-xl">
            My Projects
          </p>
        </Link>
      </motion.nav>
    </div>
  );
};

export default HeroContent;
