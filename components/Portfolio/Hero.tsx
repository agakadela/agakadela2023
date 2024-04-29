'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Balancer from 'react-wrap-balancer';
import dayjs from 'dayjs';

import { Project } from '@/data/projects';

export default function Hero({ project }: { project: Project }) {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: -40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const image1Variants: Variants = {
    hidden: { opacity: 0, x: '-40%', y: 40, scale: 0.9 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };

  const image2Variants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const image3Variants: Variants = {
    hidden: { opacity: 0, x: '40%', y: 40, scale: 0.9 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };

  const PText = motion.p;
  const H1 = motion.h1;

  return (
    <>
      <section className="relative -mt-16 w-full pb-14 pt-16 tablet:-mt-20 tablet:pt-20 laptop:-mt-[100px] laptop:pb-[72px] laptop:pt-[100px]">
        <Image
          alt="light-bg"
          src="/images/hero-bg-light.png"
          className="absolute left-0 top-0 z-[-1] w-full dark:hidden"
          priority
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 70vw, 100vw"
          fill
        />
        <div className="Heading inline-flex w-full flex-col items-center justify-start px-4 py-7 tablet:px-[140px] tablet:py-12 laptop:px-[184px] laptop:py-16">
          <div className="Typography flex flex-col items-center justify-start">
            <div className="main flex flex-col items-center justify-start gap-6">
              <PText
                className="text-center text-lg font-normal leading-6 text-secondary-700 dark:text-secondary-300 tablet:text-xl tablet:font-bold tablet:leading-7 laptop:text-2xl"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.6 }}
              >
                {project.category}.
              </PText>
              <H1
                className="text-center text-4xl font-bold leading-[44px] text-gray-900 dark:text-gray-50 tablet:text-[60px] tablet:font-medium tablet:leading-[64px] laptop:text-7xl laptop:leading-[84px]"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Balancer>{project.title}</Balancer>
              </H1>
              <PText
                className="max-w-xs text-center text-base font-medium leading-6 text-gray-700 dark:text-gray-300 tablet:max-w-[600px] tablet:text-lg tablet:leading-6 laptop:max-w-[660px] laptop:text-xl laptop:leading-7"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {project.subTitle}
              </PText>
              <PText
                className="Date text-sm font-medium text-gray-600 dark:text-gray-400 laptop:text-base"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                from {dayjs(project.dates.from).format('MMM YYYY')} to{' '}
                {dayjs(project.dates.to).format('MMM YYYY')}
              </PText>
            </div>
          </div>
        </div>
      </section>
      <div className="relative -mt-16 px-4 tablet:-mt-14 tablet:px-[140px] laptop:-mt-[84px] laptop:px-[184px] desktop:flex desktop:gap-2.5 desktop:px-0">
        {/* First Image */}
        <motion.div
          className="card-shadow relative hidden h-[320px] w-full overflow-hidden rounded-3xl tablet:h-[500px] tablet:rounded-[40px] laptop:h-[540px] desktop:-ml-[21%] desktop:block desktop:h-[460px] desktop:w-[640px]"
          initial="hidden"
          animate="visible"
          variants={image1Variants}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Image
            alt="project image"
            className="absolute left-0 top-0 object-cover"
            src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
            priority
          />
        </motion.div>

        {/* Second Image */}
        <motion.div
          className="card-shadow relative h-[320px] w-full overflow-hidden rounded-3xl tablet:h-[500px] tablet:rounded-[40px] laptop:h-[540px] desktop:h-[460px] desktop:w-[720px]"
          initial="hidden"
          animate="visible"
          variants={image2Variants}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Image
            alt="project image"
            className="absolute left-0 top-0 object-cover"
            src={project.image}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
            priority
          />
        </motion.div>

        {/* Third Image */}
        <motion.div
          className="card-shadow relative hidden h-[320px] w-full overflow-hidden rounded-3xl tablet:h-[500px] tablet:rounded-[40px] laptop:h-[540px] desktop:-mr-[21%] desktop:block desktop:h-[460px] desktop:w-[640px]"
          initial="hidden"
          animate="visible"
          variants={image3Variants}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Image
            alt="project image"
            className="absolute left-0 top-0 object-cover"
            src="https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
            priority
          />
        </motion.div>
      </div>
    </>
  );
}
