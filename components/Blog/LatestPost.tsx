import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

import HeadingText from '@/components/HeadingText';
import AnimateOnScroll from '../animation/AnimateOnScroll';

import { allPosts } from 'contentlayer/generated';

const LatestPost = () => {
  const latestPost = allPosts.sort((a, b) => {
    return dayjs(b.publishedAt).diff(dayjs(a.publishedAt));
  });

  return (
    <section className="latest-post relative flex flex-col items-start justify-start gap-6 px-4 py-7 tablet:gap-9 tablet:px-[140px] tablet:py-12 laptop:gap-14 laptop:px-[184px] laptop:py-16">
      <Image
        alt="pattern image"
        className="absolute left-0 top-0 -z-10 object-cover dark:hidden"
        src="/images/Lines-Wave-light.png"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
      />
      <Image
        alt="pattern image"
        className="absolute left-0 top-0 -z-10 hidden object-cover dark:block"
        src="/images/Lines-Wave-dark.png"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
      />
      <AnimateOnScroll
        noScale
        duration={0.8}
        y={40}
        delay={1}
        className="flex w-full flex-col items-start justify-start gap-6 tablet:gap-9 laptop:gap-14"
      >
        <HeadingText title="Latest Post" />
        <AnimateOnScroll
          noScale
          threshold={0}
          duration={0.8}
          delay={1.2}
          y={40}
          className="w-full"
        >
          <div className="Blogpost card flex w-full flex-col items-start justify-start gap-6 rounded-3xl bg-secondary-100 px-5 py-4 tablet:gap-7 tablet:px-6 tablet:py-5 940:flex-row 940:items-stretch laptop:gap-9 laptop:px-8 laptop:py-7">
            <Link href={`blog/${latestPost[0].slug}`} className="w-full">
              <div className="relative h-[268px] w-full overflow-hidden rounded-3xl tablet:h-[320px] laptop:h-[400px]">
                <Image
                  alt="post image"
                  className="absolute left-0 top-0 cursor-pointer object-cover transition-all duration-300 ease-out hover:scale-105"
                  src={latestPost[0].image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                />
              </div>
            </Link>
            <div className="Content flex w-full flex-col items-start justify-start gap-6 940:justify-between">
              <div className="Text flex w-full flex-col items-start justify-start gap-3 tablet:gap-4 laptop:gap-6">
                <div className="tags inline-flex w-full items-start justify-start space-x-2">
                  {latestPost[0].tags?.map((tag) => (
                    <div
                      key={tag}
                      className="Badge flex items-center justify-start rounded bg-primary-50 px-2 py-1 mix-blend-multiply"
                    >
                      <p className="Text text-center text-sm leading-tight text-primary-700">
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="Headingand text flex w-full flex-col items-start justify-start gap-3 laptop:gap-4">
                  <Link href={`blog/${latestPost[0].slug}`} className="w-full">
                    <p className="Title w-full text-xl font-semibold text-gray-900 tablet:text-[28px] tablet:leading-9 laptop:text-4xl laptop:leading-[48px]">
                      {latestPost[0].title}
                    </p>
                  </Link>
                  <p className="subtitle w-full text-lg font-semibold text-gray-600 laptop:text-xl">
                    {latestPost[0].subtitle}
                  </p>
                </div>
                <Link href={`blog/${latestPost[0].slug}`} className="w-full">
                  <p className="Text text-base font-medium leading-tight text-secondary-700 tablet:font-semibold laptop:text-lg">
                    Read post
                  </p>
                </Link>
              </div>
              {latestPost[0].author?.image && latestPost[0].author?.name ? (
                <div className="Author inline-flex w-full items-center justify-start gap-3 tablet:pb-4">
                  <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full laptop:h-14 laptop:w-14">
                    <Image
                      alt="client picture"
                      className="object-cover transition-all duration-300 ease-out hover:scale-105"
                      src={latestPost[0].author?.image as string}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                    />
                  </div>
                  <div className="Textand supporting text inline-flex flex-col items-start justify-start">
                    <p className="Text text-lg font-medium leading-normal text-gray-900">
                      {latestPost[0].author?.name}
                    </p>
                    <p className="Supportingtext text-base leading-tight text-gray-600">
                      {dayjs(latestPost[0].publishedAt).format('D MMM YYYY')}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </AnimateOnScroll>
      </AnimateOnScroll>
    </section>
  );
};

export default LatestPost;
