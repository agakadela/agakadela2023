import Image from 'next/image';

import AnimateOnScroll from '@/components/animation/AnimateOnScroll';

const HeroImage = () => {
  return (
    <AnimateOnScroll x="10%" delay={0} scale={0.9} duration={0.6} notLazy>
      <div className="relative flex h-60 w-60 items-center justify-start tablet:h-[300px] tablet:w-[300px] desktop:h-[560px] desktop:w-[450px]">
        <div className="absolute bottom-0 left-5 top-5 hidden h-full w-full rounded-3xl bg-secondary-300 desktop:block" />
        <div className="absolute -left-[15px] -top-[15px] block h-[270px] w-[270px] rounded-full bg-primary-100 tablet:h-[330px] tablet:w-[330px] desktop:hidden"></div>
        <div className="absolute -left-[10px] -top-[10px] block h-[260px] w-[260px] rounded-full bg-primary-200 tablet:h-[320px] tablet:w-[320px] desktop:hidden"></div>
        <div className="absolute -left-[5px] -top-[5px] block h-[250px] w-[250px] rounded-full bg-primary-400 tablet:h-[310px] tablet:w-[310px] desktop:hidden"></div>
        <Image
          alt="hero image"
          className="absolute left-0 top-0 rounded-full drop-shadow-1 dark:drop-shadow-none desktop:rounded-3xl"
          src="/images/agakadela.jpg"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="(min-width: 1024px) 450px, (min-width: 640px) 300px, 200px"
        />
      </div>
    </AnimateOnScroll>
  );
};

export default HeroImage;
