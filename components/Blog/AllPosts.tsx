'use client';

import { useState, useRef, useMemo } from 'react';
import dayjs from 'dayjs';

import HeadingText from '@/components/HeadingText';
import PostCard from '@/components/Blog/PostCard';
// import Pagination from '@/components/Pagination';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';
import { allPosts } from 'contentlayer/generated';

const Allposts = () => {
  const latestPost = useMemo(() => {
    return allPosts.reduce((latest, post) => {
      return dayjs(post.publishedAt).isAfter(dayjs(latest.publishedAt))
        ? post
        : latest;
    });
  }, []);

  const posts = useMemo(() => {
    return allPosts.sort(
      (a, b) => dayjs(b.publishedAt).valueOf() - dayjs(a.publishedAt).valueOf()
    );
  }, [latestPost]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const postsRef = useRef(null);

  // const limit = 6;
  // const total = Math.ceil(posts.length / limit);

  // const handleNext = () => {
  //   setCurrentPage((prev) => prev + 1);
  //   const element = postsRef.current as unknown as HTMLElement;
  //   element.scrollIntoView();
  // };

  // const handlePrev = () => {
  //   setCurrentPage((prev) => prev - 1);
  //   const element = postsRef.current as unknown as HTMLElement;
  //   element.scrollIntoView();
  // };

  // const startIndex = (currentPage - 1) * limit;
  // const endIndex = startIndex + limit;
  // const slicedPosts = posts.slice(startIndex, endIndex);

  return (
    <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
      <section
        // ref={postsRef}
        id="all-projects"
        className="flex flex-col gap-6 px-4 pb-12 pt-7 tablet:gap-9 tablet:px-[140px] tablet:pb-[96px] tablet:pt-12 laptop:gap-14 laptop:px-[184px] laptop:pt-16"
      >
        <HeadingText title="All Posts" />
        <div className="Layout inline-flex w-full flex-col items-center justify-start gap-10">
          <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
            <div className="posts flex w-full flex-col items-center gap-y-5 tablet:grid tablet:grid-cols-2 tablet:items-stretch tablet:gap-x-8 tablet:gap-y-11 laptop:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.title} post={post} />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
        {/* <Pagination
          page={currentPage}
          total={total}
          onNext={handleNext}
          onPrev={handlePrev}
        /> */}
      </section>
    </AnimateOnScroll>
  );
};

export default Allposts;
