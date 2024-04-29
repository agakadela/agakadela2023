import Image from 'next/image';
import HeadingText from '@/components/HeadingText';
import ProjectCard from '@/components/Portfolio/ProjectCard';
import AnimateOnScroll from '../animation/AnimateOnScroll';

import { latestProject } from '@/data/projects';

const LatestProject = () => {
  return (
    <section className="latest-project relative flex flex-col items-start justify-start gap-6 px-4 py-7 tablet:gap-9 tablet:px-[140px] tablet:py-12 laptop:gap-14 laptop:px-[184px] laptop:py-16">
      <Image
        alt="pattern image"
        className="absolute left-0 top-0 -z-10 dark:hidden"
        src="/images/Lines-Wave-light.png"
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
      />
      <Image
        alt="pattern image"
        className="absolute left-0 top-0 -z-10 hidden dark:block"
        src="/images/Lines-Wave-dark.png"
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
      />
      <AnimateOnScroll
        noScale
        duration={0.8}
        y={40}
        delay={1}
        className="flex flex-col items-start justify-start gap-6 tablet:gap-9 laptop:gap-14"
      >
        <HeadingText title="Latest Project" />
        <AnimateOnScroll
          noScale
          threshold={0}
          duration={0.8}
          y={40}
          delay={1.2}
        >
          <ProjectCard variant="latest" project={latestProject} />
        </AnimateOnScroll>
      </AnimateOnScroll>
    </section>
  );
};

export default LatestProject;
