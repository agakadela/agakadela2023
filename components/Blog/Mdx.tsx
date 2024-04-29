import { ReactNode } from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';

function RoundedImage(props: { alt: string; src: string; caption?: string }) {
  const { alt, src, caption, ...rest } = props;
  return (
    <div className="flex flex-col items-center justify-start gap-y-4 py-12 pb-4">
      <div className="relative h-[360px] w-full overflow-hidden rounded-2xl tablet:h-[520px] laptop:h-[640px]">
        <Image
          src={src}
          alt={alt}
          className="rounded-3xl object-cover"
          {...rest}
          fill
        />
      </div>
      {caption ? <p className="caption">{caption}</p> : null}
    </div>
  );
}

type ImageGridProps = {
  images: {
    src: string;
    alt: string;
  }[];
  caption?: string;
};

function ImageGrid({ images, caption }: ImageGridProps) {
  return (
    <div className="flex flex-col items-center justify-start gap-y-4 py-12 pb-4">
      <div className="flex w-full gap-4">
        <div className="flex w-1/2 flex-col gap-4">
          <div className="relative h-[212px] w-full overflow-hidden rounded-2xl tablet:h-[312px]">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              className="rounded-3xl object-cover"
              fill
            />
          </div>
          <div className="relative h-[212px] w-full overflow-hidden rounded-2xl tablet:h-[312px]">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              className="rounded-3xl object-cover"
              fill
            />
          </div>
        </div>
        <div className="relative h-[440px] w-1/2 overflow-hidden rounded-2xl tablet:h-[640px]">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            className="rounded-3xl object-cover"
            fill
          />
        </div>
      </div>
      {caption ? <p className="caption">{caption}</p> : null}
    </div>
  );
}

const AnimatedParagraph = ({ children }: { children: ReactNode }) => {
  return (
    <AnimateOnScroll y={10} duration={0.6} scale={1.05}>
      {children}
    </AnimateOnScroll>
  );
};

function Divider() {
  return <div className="py-2" />;
}

const components = {
  Image: RoundedImage,
  Divider,
  ImageGrid,
  AnimatedParagraph,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="article-body relative flex items-start justify-end">
      <div className="desktop:w-9/12 desktop:pl-7">
        <Component components={{ ...components }} />
      </div>
    </article>
  );
}
