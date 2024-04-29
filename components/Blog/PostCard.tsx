import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Post } from 'contentlayer/generated';

import AnimateOnScroll from '@/components/animation/AnimateOnScroll';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <AnimateOnScroll
      key={post.title}
      duration={0.3}
      scale={0.95}
      className="h-full w-full"
    >
      <div
        className={cn(
          'PostCard inline-flex h-full w-full flex-col items-start justify-start gap-8 rounded-[20px] bg-secondary-100 px-4 py-4 tablet:rounded-3xl tablet:px-6 tablet:py-5'
        )}
      >
        <Link href={`/blog/${post.slug}`} className="w-full">
          <div className="relative h-60 w-full overflow-hidden rounded-2xl tablet:h-[200px] 940:h-[280px]">
            <Image
              alt="post image"
              className="Image cursor-pointer object-cover transition-all duration-300 ease-out hover:scale-105"
              src={post.image}
              fill
              sizes="(max-width: 640px) 100vw, 640px"
            />
          </div>
        </Link>
        <div className="Content flex h-full w-full flex-col items-start justify-start gap-5 tablet:justify-between">
          <div className="Headingand text flex w-full flex-col items-start justify-start gap-4">
            <Link href={`/blog/${post.slug}`}>
              <p className="Title w-full text-xl font-bold leading-7 text-gray-900 940:text-2xl">
                {post.title}
              </p>
            </Link>
            <p className="subtitle line-clamp-3 w-full text-base font-semibold text-gray-600">
              {post.subtitle}
            </p>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <button className="Text text-base font-bold text-primary-700">
              Read post
            </button>
          </Link>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
