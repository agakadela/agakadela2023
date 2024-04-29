import Image from 'next/image';

import LatestProject from '@/components/Portfolio/LatestProject';
import Cta from '@/components/Cta';
import Contact from '@/components/Contact';
import AllProjects from '@/components/Portfolio/AllProjects';
import AnimatedHeadingText from '@/components/animation/AnimatedHeading';

export const metadata = {
  title: 'Portfolio',
  description:
    'A collection of my best work, showcasing my expertise, skill, and dedication to quality.',
};

const PortfolioPage = () => {
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
          head="Portfolio."
          title={
            <>
              Showcasing My{' '}
              <span className="hidden bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent dark:from-[#93C5FD] dark:via-[#BFDBFE] dark:to-[#93C5FD] tablet:inline">
                Digital Art{' '}
              </span>
              <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent dark:from-[#93C5FD] dark:via-[#BFDBFE] dark:to-[#93C5FD]">
                Masterpieces
              </span>
            </>
          }
          subtitle="A Collection of Our Best Work, Showcasing Our Expertise, Skill,
          and Dedication to Quality."
        />
      </section>
      <LatestProject />
      <AllProjects />
      <Cta
        title="Ready to Collaborate?"
        description="Join me on a journey where creativity knows no bounds. Let's explore the limits of digital art together."
      />
      <Contact />
    </>
  );
};

export default PortfolioPage;
