import Image from 'next/image';

import ProjectCard from '@/components/Portfolio/ProjectCard';
import HeadingText from '@/components/HeadingText';

import { projects } from '@/data/projects';
import AnimateOnScroll from '../animation/AnimateOnScroll';

export default function Featured() {
  return (
    <section
      className="relative px-4 py-7 tablet:px-[140px] tablet:py-12 laptop:px-[184px] laptop:py-16"
      id="projects"
    >
      <Image
        alt="pattern light"
        className="absolute left-0 top-0 -z-10 w-full object-cover dark:hidden"
        src="/images/Lines-Wave-light.png"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        fill
      />
      <Image
        alt="pattern dark"
        className="absolute left-0 top-0 -z-10 hidden w-full object-cover dark:block"
        src="/images/Lines-Wave-dark.png"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        fill
      />
      <AnimateOnScroll
        noScale
        y={40}
        threshold={0.1}
        duration={0.6}
        className="flex flex-col gap-6 tablet:gap-9 laptop:gap-14"
      >
        <HeadingText title="What I've Been Working On" />
        <AnimateOnScroll
          noScale
          y={40}
          threshold={0.1}
          duration={0.6}
          className="w-full"
        >
          <div className="Layout inline-flex w-full flex-col items-center justify-start gap-8 desktop:gap-12">
            <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
              <div className="flex flex-col gap-10 tablet:gap-[56px]">
                {projects.slice(0, 2).map((project, index) => {
                  return (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      index={index}
                      variant="featured"
                    />
                  );
                })}
              </div>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
      </AnimateOnScroll>
    </section>
  );
}
