import Image from 'next/image';
import Link from 'next/link';

import { RiArrowRightUpLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { ImQuotesLeft } from 'react-icons/im';

import AnimateOnScroll from '../animation/AnimateOnScroll';

import { cn } from '@/lib/utils';

type ProjectCardProps = {
  project: any;
  variant?: 'default' | 'latest' | 'featured';
  index?: number;
};

type ProjectProps = ProjectCardProps;

const Project = ({ project, variant, index }: ProjectProps) => (
  <div
    className={cn(
      'ProjectLayout flex w-full flex-col items-start justify-start gap-5 rounded-3xl 940:items-stretch desktop:min-h-[720px]',
      // add 940:flex-row class if index is even and 940:flex-row-reverse if index is odd
      index && index % 2 === 1 ? '940:flex-row-reverse' : '940:flex-row'
    )}
  >
    <div
      className={cn(
        'Project flex w-full flex-col items-start space-y-6 rounded-2xl p-4 shadow transition-all duration-300 ease-out 940:justify-between laptop:rounded-3xl desktop:w-7/12',
        variant === 'latest' || variant === 'featured'
          ? 'Outstanding-Project'
          : 'Default-Project'
      )}
    >
      <div className="Text flex w-full flex-col items-start justify-start gap-3 p-3 desktop:gap-4 desktop:px-6 desktop:py-4">
        <p
          className={cn(
            'Title w-full text-xl font-bold leading-7 tablet:text-2xl desktop:text-[30px] desktop:leading-9',
            variant === 'latest' || variant === 'featured'
              ? 'text-gray-50 dark:text-primary-100'
              : 'text-gray-900'
          )}
        >
          {project.title}
        </p>
        <p
          className={cn(
            'Subtitle text-sm font-medium tablet:max-w-[280px] tablet:text-base desktop:max-w-xs desktop:text-lg desktop:leading-6',
            variant === 'latest' || variant === 'featured'
              ? 'text-gray-200 dark:text-primary-100'
              : 'text-gray-700'
          )}
        >
          {project.subTitle}
        </p>
        <Link
          href={`${project.link}`}
          className={cn(
            'Button inline-flex items-center justify-center gap-2 transition-colors duration-300 ease-out',
            variant === 'latest' || variant === 'featured'
              ? 'text-gray-800 hover:text-gray-950 dark:text-primary-200 dark:hover:text-primary-300'
              : 'text-gray-800 hover:text-gray-950'
          )}
          target="_blank"
          aria-label={`Learn more about the ${project.title} project`}
        >
          <span className="Text text-sm font-bold tablet:text-base desktop:text-lg desktop:leading-6">
            Learn More
          </span>
          <RiArrowRightUpLine
            className="h-4 w-4 tablet:h-5 tablet:w-5 desktop:h-6 desktop:w-6"
            aria-hidden="true"
          />
          <span className="sr-only">{project.title}</span>
        </Link>
      </div>
      <div className="ImageContainer inline-flex w-full items-start justify-start rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100/50 p-2 tablet:p-[10px] desktop:p-4">
        <Link
          href={`${project.link}`}
          className="relative h-[300px] w-full overflow-hidden rounded-2xl tablet:h-[360px]"
          aria-label={`Learn more about the ${project.title} project`}
          target="_blank"
        >
          <Image
            alt="project image"
            className="absolute left-0 top-0 cursor-pointer object-cover transition-all duration-300 ease-out hover:scale-105"
            src={project.image}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
          />
        </Link>
      </div>
    </div>
    <div className="Details flex w-full flex-col items-center justify-start space-y-6 rounded-2xl bg-secondary-100 p-4 transition-all delay-200 duration-300 ease-in-out tablet:justify-between laptop:rounded-3xl desktop:w-5/12 ">
      <div className="WorkDone flex w-full flex-col items-start justify-start space-y-2.5 px-2 py-4">
        <div className="Header inline-flex items-start justify-start pb-1.5 desktop:pb-2.5">
          <p className="ProjectSummary: text-lg font-semibold leading-6 text-secondary-900 tablet:text-xl tablet:font-bold desktop:text-2xl desktop:leading-7">
            Project Summary:
          </p>
        </div>
        <div className="List flex w-full flex-col items-start justify-start gap-4">
          {project.summary
            ? project.summary.map((summary) => (
                <div
                  key={summary.text}
                  className="ListItem inline-flex w-full items-start justify-start space-x-2.5"
                >
                  <div className="Icon flex items-start justify-start pt-1">
                    <RiCheckboxCircleLine className="CheckCircle h-4 w-4 text-primary-700 tablet:h-5 tablet:w-5 desktop:h-[22px] desktop:w-[22px]" />
                  </div>
                  <p className="flex-1 text-base font-semibold leading-6 text-gray-900 tablet:text-lg desktop:text-xl desktop:font-medium desktop:leading-7">
                    {summary.text}
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
      <Image
        alt="project logo"
        className="Logo"
        src={project.logo}
        width={200}
        height={100}
      />
    </div>
  </div>
);

const ProjectCard = ({ project, variant, index }: ProjectCardProps) => {
  return (
    <>
      {variant === 'latest' ? (
        <Project project={project} variant={variant} index={index} />
      ) : (
        <AnimateOnScroll scale={0.9} duration={0.6} y={20} delay={0.2}>
          <Project project={project} variant={variant} index={index} />
        </AnimateOnScroll>
      )}
    </>
  );
};

export default ProjectCard;
