import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';
import dayjs from 'dayjs';
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineDribbble,
} from 'react-icons/ai';

import { Mdx } from '@/components/Blog/Mdx';
import Cta from '@/components/Cta';
import RelatedPosts from '@/components/Blog/RelatedPosts';

import { allPosts } from 'contentlayer/generated';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    subtitle: description,
    image,
    slug,
  } = post;
  const ogImage = image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://agakadela.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const SocialShare = () => (
    <div className="SocialLinks self-end pt-10 tablet:pt-14 laptop:pt-16 desktop:w-9/12 desktop:pl-7">
      <div className="Row flex items-center justify-between rounded-lg bg-secondary-100 p-4 dark:bg-dark-1 laptop:px-7 laptop:py-6 desktop:rounded-2xl">
        <div className="Text h-full">
          <p className="FollowMe text-base font-bold text-secondary-900 dark:text-secondary-50 tablet:text-xl tablet:font-bold tablet:leading-7 laptop:text-2xl">
            Follow Me
          </p>
        </div>
        <div className="Sociallinks flex items-center justify-center gap-3 tablet:gap-6 940:gap-8">
          <AiOutlineTwitter className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 tablet:h-6 tablet:w-6 desktop:h-[26px] desktop:w-[26px]" />
          <AiFillLinkedin className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 tablet:h-6 tablet:w-6 desktop:h-[26px] desktop:w-[26px]" />
          <AiFillYoutube className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300  dark:hover:text-gray-400 tablet:h-6 tablet:w-6 desktop:h-[26px] desktop:w-[26px]" />
          <AiOutlineDribbble className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 tablet:h-6 tablet:w-6 desktop:h-[26px] desktop:w-[26px]" />
        </div>
      </div>
    </div>
  );

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
              <p className="text-center text-lg font-normal leading-6 text-secondary-700 dark:text-secondary-300 tablet:text-xl tablet:font-bold tablet:leading-7 laptop:text-2xl">
                {post.category}.
              </p>
              <h1 className="text-center text-4xl font-bold leading-[44px] text-gray-900 dark:text-gray-50 tablet:text-[60px] tablet:font-medium tablet:leading-[64px] laptop:text-7xl laptop:leading-[84px]">
                <Balancer>{post.title}</Balancer>
              </h1>
              <p className="max-w-xs text-center text-base font-medium leading-6 text-gray-700 dark:text-gray-300 tablet:max-w-[600px] tablet:text-lg tablet:leading-6 laptop:max-w-[660px] laptop:text-xl laptop:leading-7">
                {post.subtitle}
              </p>
              <p className="Date text-sm font-medium text-gray-600 dark:text-gray-400 laptop:text-base">
                Published {dayjs(post.publishedAt).format('D MMM YYYY')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="-mt-16 px-4 tablet:-mt-14 tablet:px-[140px] laptop:-mt-[84px] laptop:px-[184px]">
        <div className="card-shadow relative h-[320px] w-full overflow-hidden rounded-3xl tablet:h-[500px] tablet:rounded-[40px] laptop:h-[540px]">
          <Image
            alt="post image"
            className="absolute left-0 top-0 object-cover"
            src={post.image}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
            priority
          />
        </div>
      </div>
      <div className="px-4 pb-7 tablet:px-[140px] tablet:pb-12 laptop:px-[184px] desktop:flex desktop:flex-col desktop:gap-7 desktop:pb-16 desktop:pt-24">
        <Mdx code={post.body.code} />
        {/* <SocialShare /> */}
      </div>
    </>
  );
}
