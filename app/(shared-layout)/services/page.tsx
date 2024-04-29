import Image from 'next/image';

import AllServices from '@/components/Services/AllServices';
import Cta from '@/components/Cta';
import Contact from '@/components/Contact';
import AnimatedHeadingText from '@/components/animation/AnimatedHeading';

export const metadata = {
  title: 'Services',
  description:
    'Experience Our Range of Professional and Tailored Services, Designed to Bring Your Creative Vision to Life.',
};

const Services = () => {
  return (
    <>
      <section className="relative -mt-16 w-full pt-16 tablet:-mt-20 tablet:pt-20 laptop:-mt-[100px] laptop:pt-[100px]">
        <Image
          alt="light-bg"
          src="/images/hero-bg-light.png"
          fill
          className="absolute left-0 top-0 z-[-1] w-full dark:hidden"
          priority
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 70vw, 100vw"
        />
        {/* <Image
          alt="dark-bg"
          src="/images/hero-bg-dark.png"
          fill
          className="absolute left-0 top-0 z-[-1] hidden w-full dark:block"
          priority
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 70vw, 100vw"
        /> */}
        <AnimatedHeadingText
          head="Services."
          title={
            <>
              <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent dark:from-[#93C5FD] dark:via-[#BFDBFE] dark:to-[#93C5FD]">
                Expert Digital Art{' '}
                <span className="hidden 940:inline">Services </span>
              </span>
              <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent dark:from-[#93C5FD] dark:via-[#BFDBFE] dark:to-[#93C5FD] 940:hidden">
                Services{' '}
              </span>
              for Your Next Project
            </>
          }
          subtitle="Experience Our Range of Professional and Tailored Services,
          Designed to Bring Your Creative Vision to Life."
        />
      </section>
      <AllServices />
      <Cta
        title="Ready to Collaborate?"
        description="Join me on a journey where creativity knows no bounds. Let's explore the limits of digital art together."
      />
      <Contact />
    </>
  );
};

export default Services;
