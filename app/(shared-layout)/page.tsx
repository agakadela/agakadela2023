import Image from 'next/image';

import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/Portfolio/FeaturedProjects';
import FeaturedPosts from '@/components/Blog/FeaturedPosts';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Aga Kadela',
  description: 'Empowering women in tech',
};

export default function Home() {
  return (
    <>
      <main role="main" aria-labelledby="main-heading">
        <h1 id="main-heading" className="sr-only">
          Aga Kadela - Empowering women in tech
        </h1>
        <section className="relative -mt-16 w-full pt-16 tablet:-mt-20 tablet:pt-20 laptop:-mt-[100px] laptop:pt-[100px]">
          <Image
            alt="light background"
            src="/images/hero-bg-light.png"
            fill
            className="absolute left-0 top-0 z-[-1] w-full dark:hidden"
            priority
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 70vw, 100vw"
          />
          <Hero />
        </section>
        <FeaturedProjects />
        <FeaturedPosts />
        <Contact />
      </main>
    </>
  );
}
