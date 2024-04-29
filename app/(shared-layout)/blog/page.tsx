import type { Metadata } from 'next';
import Image from 'next/image';

import AnimatedHeading from '@/components/animation/AnimatedHeading';
import Search from '@/components/Blog/Search';
import LatestPost from '@/components/Blog/LatestPost';
import Cta from '@/components/Cta';
import Allposts from '@/components/Blog/AllPosts';
import ArchivedPosts from '@/components/Blog/ArchivedPosts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on digital art, design, and more.',
};

export default async function BlogPage() {
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
        <Image
          alt="dark-bg"
          src="/images/hero-bg-dark.png"
          fill
          className="absolute left-0 top-0 z-[-1] hidden w-full dark:block"
          priority
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 70vw, 100vw"
        />
      </section>
      <Allposts />
    </>
  );
}
