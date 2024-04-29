'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import HeadingText from '@/components/HeadingText';
import Pagination from '@/components/Pagination';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';
import { allPosts } from 'contentlayer/generated';

const posts = allPosts
  .filter((post) => {
    return post.isArchived;
  })
  .sort(
    (a, b) => dayjs(b.publishedAt).valueOf() - dayjs(a.publishedAt).valueOf()
  );

const ArchivedPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsRef = useRef(null);

  const limit = 5;
  const total = Math.ceil(posts.length / limit);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    const element = postsRef.current as unknown as HTMLElement;
    element.scrollIntoView();
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    const element = postsRef.current as unknown as HTMLElement;
    element.scrollIntoView();
  };

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedPosts = posts.slice(startIndex, endIndex);

  return (
    <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
      <section
        ref={postsRef}
        id="all-projects"
        className="flex flex-col gap-6 px-4 pb-12 pt-7 tablet:gap-9 tablet:px-[140px] tablet:pb-[96px] tablet:pt-12 laptop:gap-14 laptop:px-[184px] laptop:pt-16"
      >
        <HeadingText title="Archived Posts" />
        <div className="Layout flex flex-col items-center justify-start gap-5 tablet:gap-6 940:flex-row laptop:gap-9">
          <div className="Horizontaltabs flex w-full items-start justify-center gap-2 pt-1 tablet:pt-0 940:w-fit 940:flex-col">
            <div className="_Tabbutton base flex items-center justify-center rounded-lg px-2 py-1 tablet:px-4 tablet:py-3 laptop:px-5">
              <p className="Text text-base font-semibold text-gray-700 dark:text-gray-400 tablet:text-lg tablet:font-bold">
                2020
              </p>
            </div>
            <div className="_Tabbutton base flex items-center justify-center rounded-lg px-2 py-1 tablet:px-4 tablet:py-3 laptop:px-5">
              <p className="Text text-base font-bold text-primary-700 dark:text-primary-300 tablet:text-lg">
                2019
              </p>
            </div>
            <div className="_Tabbutton base flex items-center justify-center rounded-lg px-2 py-1 tablet:px-4 tablet:py-3 laptop:px-5">
              <p className="Text text-base font-semibold text-gray-700 dark:text-gray-400 tablet:text-lg tablet:font-bold">
                2018
              </p>
            </div>
            <div className="_Tabbutton base flex items-center justify-center rounded-lg px-2 py-1 tablet:px-4 tablet:py-3 laptop:px-5">
              <p className="Text text-base font-semibold text-gray-700 dark:text-gray-400 tablet:text-lg tablet:font-bold">
                2017
              </p>
            </div>
          </div>
          <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
            <div className="Posts flex flex-col items-start justify-start gap-7 tablet:gap-9 laptop:gap-12">
              {slicedPosts.map((post) => (
                <div
                  key={post.title}
                  className="Post flex items-start justify-start gap-2 tablet:gap-4 laptop:gap-5"
                >
                  <div className="_Tabbutton base flex w-14 items-center justify-center py-1 tablet:w-[72px] laptop:py-1.5">
                    <p className="Text flex-1 text-sm leading-tight text-secondary-700 dark:text-secondary-300">
                      {dayjs(post.publishedAt).format('DD MMM')}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start gap-2.5">
                    <Link href={`/blog/${post.slug}`}>
                      <p className="w-full cursor-pointer text-xl font-bold leading-7 text-primary-800 dark:text-primary-100 tablet:text-2xl laptop:text-3xl laptop:leading-9">
                        {post.title}
                      </p>
                    </Link>
                    <p className="w-full text-sm font-light text-gray-600 dark:text-gray-300 tablet:text-base laptop:max-w-[700px] laptop:text-lg desktop:max-w-[780px]">
                      {post.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
        <Pagination
          page={currentPage}
          total={total}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </section>
    </AnimateOnScroll>
  );
};

export default ArchivedPosts;
