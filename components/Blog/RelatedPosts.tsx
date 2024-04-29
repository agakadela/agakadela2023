import dayjs from 'dayjs';
import { cn } from '@/lib/utils';

import HeadingText from '@/components/HeadingText';
import PostCard from '@/components/Blog/PostCard';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';

import { allPosts } from 'contentlayer/generated';

const RelatedPosts = ({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) => {
  const relatedPosts = allPosts
    .filter(
      (post) =>
        post.category === category && !post.isArchived && post.slug !== slug
    )
    .sort(
      (a, b) => dayjs(b.publishedAt).valueOf() - dayjs(a.publishedAt).valueOf()
    )
    .slice(0, 3);

  return (
    <AnimateOnScroll noScale y={40} threshold={0.4} duration={0.6}>
      <section className="related-posts flex flex-col items-start justify-start gap-6 px-4 py-7 tablet:gap-9 tablet:px-[140px] tablet:py-12 laptop:gap-14 laptop:px-[184px] laptop:py-16">
        <HeadingText
          title="Related Posts"
          link="/blog"
          cta="See All Articles"
        />
        <AnimateOnScroll noScale y={40} threshold={0.4} duration={0.6}>
          <div className="posts flex w-full flex-col items-center gap-y-5 tablet:grid tablet:grid-cols-2 tablet:items-stretch tablet:gap-x-8 tablet:gap-y-11 desktop:grid-cols-3">
            {relatedPosts.map((post, index) => (
              <div
                key={post.title}
                className={cn(index >= 2 ? 'hidden desktop:block' : 'block')}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </section>
    </AnimateOnScroll>
  );
};

export default RelatedPosts;
