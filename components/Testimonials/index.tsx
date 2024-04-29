'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

import AnimateOnScroll from '@/components/animation/AnimateOnScroll';
import HeadingText from '@/components/HeadingText';

const featuredTestimonials = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1614204424926-196a80bf0be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60',
    text: `I had the pleasure of working with him on a recent project, and I couldn't be happier with the results`,
    name: 'Amelia, Web Designer',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1677555465624-30ec4088f4c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60',
    text: `He's a great communicator and was able to deliver exactly what I needed on time and within budget`,
    name: 'David, Marketing Consultant',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60',
    text: `Working with him was a pleasure. He's professional, knowledgeable, and always willing to go the extra mile`,
    name: 'Emily, Copywriter',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60',
    text: `He has a real talent for design and was able to create a beautiful website that perfectly matched my vision`,
    name: 'Fiona, Small Business Owner',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=60',
    text: `He's an expert in his field and was able to provide valuable insights that helped me make informed decisions`,
    name: 'George, Business Owner',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1678212352260-5c72115ac9b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60',
    text: `I've worked with him on several projects now, and he never fails to impress me with his skills and creativity`,
    name: 'Henry, UX Designer',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<string>('next');

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('next');
      setActiveIndex((activeIndex + 1) % featuredTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleSlide = useCallback(
    (index: number) => {
      const direction = index > activeIndex ? 'next' : 'prev';
      setSlideDirection(direction);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const cardVariants: Variants = {
    initial: {
      backgroundColor: '#dbeafe',
    },
    animate: {
      backgroundColor: 'rgb(191 219 254 / 0.9)',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      backgroundColor: '#dbeafe',
      transition: {
        ease: 'easeIn',
      },
    },
  };

  const testimonialVariants: Variants = {
    initial: (direction: string) => ({
      scale: 0.8,
      opacity: 0,
      x: direction === 'next' ? '40%' : '-40%',
    }),
    animate: {
      scale: 1,
      opacity: 1,
      x: '0%',
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
    exit: (direction: string) => ({
      scale: 0.8,
      opacity: 0,
      x: direction === 'next' ? '-40%' : '40%',
      transition: {
        duration: 0.6,
        ease: 'easeIn',
      },
    }),
  };

  const dotVariants: Variants = {
    active: {
      width: '16px',
      backgroundColor: '#3730A3',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    inactive: {
      width: '6px',
      backgroundColor: '#9CA3AF',
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <AnimateOnScroll noScale threshold={0.4} y={40} duration={0.6}>
      <section className="flex flex-col gap-6 px-4 pb-14 pt-7 tablet:gap-9 tablet:px-[140px] tablet:pb-24 tablet:pt-12 laptop:gap-14 laptop:px-[184px] laptop:py-16">
        <HeadingText title="Glowing Endorsements" />
        <AnimateOnScroll noScale threshold={0.4} y={40} duration={0.6}>
          <motion.div
            key={activeIndex}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="Card relative inline-flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl px-5 py-4 tablet:gap-8 tablet:rounded-[32px] tablet:px-6 tablet:py-7 laptop:px-8"
          >
            <ImQuotesLeft className="Icon absolute left-5 top-5 text-[28px] text-secondary-800 tablet:left-[50px] tablet:top-[50px] tablet:text-[40px] laptop:text-[48px]" />
            {/* carousel using featuredTestimonials array */}
            <motion.div
              key={activeIndex}
              variants={testimonialVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={slideDirection}
              className="relative h-[200px] w-[200px] overflow-hidden rounded-full shadow tablet:h-[180px] tablet:w-[180px] laptop:h-[220px] laptop:w-[220px]"
            >
              <Image
                alt="testimonial image"
                className="Image object-cover"
                src={featuredTestimonials[activeIndex].image}
                fill
                sizes="(max-width: 639px) 200px, (max-width: 1023px) 180px, 220px"
              />
            </motion.div>
            <div className="Text flex w-full flex-col items-center justify-start gap-4 pb-6 tablet:gap-9 tablet:py-2">
              <motion.div
                key={activeIndex}
                variants={testimonialVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={slideDirection}
                className="flex w-full flex-col items-center justify-start gap-3 tablet:gap-5 tablet:px-3 laptop:gap-6"
              >
                <p className="relative w-full text-center text-xl font-bold leading-7 text-gray-900 tablet:text-[28px] tablet:leading-8 laptop:text-[32px] laptop:leading-[48px]">
                  <ImQuotesLeft className="mb-6 mr-1 inline-block text-[10px] tablet:text-[12px] laptop:text-[14px]" />
                  {featuredTestimonials[activeIndex].text}
                  <ImQuotesRight className="mb-6 ml-1 inline-block text-[10px] tablet:text-[12px] laptop:text-[14px]" />
                </p>
                <p className="text-center text-lg leading-normal text-gray-800 tablet:text-2xl tablet:leading-7">
                  {featuredTestimonials[activeIndex].name}
                </p>
              </motion.div>
              <div className="Dots inline-flex items-center justify-center space-x-5">
                {featuredTestimonials.map((_, index) => (
                  <motion.div
                    key={index}
                    className={clsx(
                      'Pagination flex h-[6px] cursor-pointer items-center justify-center rounded-full tablet:h-2',
                      index === activeIndex
                        ? ''
                        : 'w-2 bg-gray-400 dark:bg-gray-500'
                    )}
                    onClick={() => handleSlide(index)}
                    variants={dotVariants}
                    animate={index === activeIndex ? 'active' : false}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimateOnScroll>
      </section>
    </AnimateOnScroll>
  );
};

export default Testimonials;
