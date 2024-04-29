import Image from 'next/image';
import * as Icons from 'react-icons/ri';
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineDribbble,
} from 'react-icons/ai';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

import ProjectCard from '@/components/Portfolio/ProjectCard';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';
import {
  sortedProjects,
  featuredProjects,
  Overview,
  Project,
  ProjectReview,
  Color,
  WorkDone,
} from '@/data/projects';

const Overview = ({ overview }: { overview: Overview }) => {
  return (
    <AnimateOnScroll scale={0.9} y={20} className="w-full">
      <div className="overview flex w-full flex-col items-start justify-start gap-y-16 rounded-2xl bg-secondary-100 px-8 py-4 desktop:gap-y-[72px] desktop:rounded-[32px] desktop:py-6 desktop:pl-10">
        <div className="flex w-full flex-col items-center justify-start gap-y-8 940:flex-row-reverse 940:items-start 940:justify-between 940:pt-1">
          <div className="Sociallinks flex items-center justify-center gap-5 pt-6 940:gap-8 desktop:pr-7">
            <AiOutlineTwitter className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 tablet:h-6 tablet:w-6 desktop:h-[26px] desktop:w-[26px]" />
            <AiFillLinkedin className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 tablet:h-6 tablet:w-6 desktop:h-[26px] desktop:w-[26px]" />
            <AiFillYoutube className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300  dark:hover:text-gray-400 tablet:h-6 tablet:w-6 desktop:h-[26px] desktop:w-[26px]" />
            <AiOutlineDribbble className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 tablet:h-6 tablet:w-6 desktop:h-[26px] desktop:w-[26px]" />
          </div>
          <p className="w-full text-center text-2xl font-bold text-primary-900 dark:text-primary-50 tablet:text-3xl 940:max-w-[460px] 940:text-start desktop:text-4xl desktop:font-semibold">
            {overview.text}
          </p>
        </div>
        <div className="Row inline-flex w-full flex-wrap items-start justify-start gap-x-4 gap-y-6 pb-2 tablet:gap-x-8">
          <div className="Services inline-flex flex-1 flex-col items-start justify-start gap-y-4">
            <h4 className="Services text-lg font-bold text-primary-900 dark:text-primary-50 desktop:text-xl">
              Services
            </h4>
            <ul className="flex w-full flex-col gap-1.5 text-base leading-7 text-gray-600 dark:text-gray-300 desktop:text-lg">
              {overview.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="Technologies inline-flex flex-1 flex-col items-start justify-start gap-y-4">
            <h4 className="Technologies text-lg font-bold text-primary-900 dark:text-primary-50 desktop:text-xl">
              Technologies
            </h4>
            <ul className="flex w-full flex-col gap-1.5 text-base leading-7 text-gray-600 dark:text-gray-300 desktop:text-lg">
              {overview.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="Software inline-flex flex-1 flex-col items-start justify-start gap-y-4">
            <h4 className="Software text-lg font-bold text-primary-900 dark:text-primary-50 desktop:text-xl">
              Software
            </h4>
            <ul className="flex w-full flex-col gap-1.5 text-base leading-7 text-gray-600 dark:text-gray-300 desktop:text-lg">
              {overview.software.map((soft) => (
                <li key={soft}>{soft}</li>
              ))}
            </ul>
          </div>
          <div className="Client flex w-full flex-1 flex-col items-start justify-start gap-y-4">
            <h4 className="Client text-lg font-bold text-primary-900 dark:text-primary-50 desktop:text-xl">
              Client
            </h4>
            <p className="EaseOutStudio w-full text-base font-medium leading-7 text-secondary-700 dark:text-primary-300 desktop:text-lg">
              {overview.client}
            </p>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};

type ImageGridProps = {
  images: string[];
  caption?: string;
};

function ImageGrid({ images, caption }: ImageGridProps) {
  return (
    <AnimateOnScroll scale={0.9} y={20} className="w-full">
      <div className="py-8">
        <div className="flex w-full flex-col gap-4">
          <AnimateOnScroll scale={0.9} threshold={0.3}>
            <div className="relative h-[280px] w-full overflow-hidden rounded-2xl tablet:h-[400px] laptop:h-[560px]">
              <Image
                src={images[0]}
                alt="project image"
                className="rounded-3xl object-cover"
                fill
              />
            </div>
          </AnimateOnScroll>
          <div className="flex w-full flex-col gap-4 tablet:flex-row">
            <AnimateOnScroll
              scale={0.9}
              threshold={0.3}
              className="w-full tablet:w-1/2"
            >
              <div className="relative h-[280px] overflow-hidden rounded-2xl tablet:h-[400px] laptop:h-[560px]">
                <Image
                  src={images[1]}
                  alt="project image"
                  className="rounded-3xl object-cover"
                  fill
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll
              scale={0.9}
              threshold={0.3}
              className="w-full tablet:w-1/2"
            >
              <div className="relative h-[280px] overflow-hidden rounded-2xl tablet:h-[400px] laptop:h-[560px]">
                <Image
                  src={images[2]}
                  alt="project image"
                  className="rounded-3xl object-cover"
                  fill
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        {caption ? (
          <p className="caption pt-4 text-center text-sm text-gray-600 dark:text-gray-400 desktop:pt-6">
            {caption}
          </p>
        ) : null}
      </div>
    </AnimateOnScroll>
  );
}

const ColorPalette = ({ colors }: { colors: Color[] }) => {
  return (
    <AnimateOnScroll scale={0.9} y={20} className="w-full">
      <div className="ColorPalette flex flex-col items-start justify-start space-y-6 pt-2 laptop:pt-9">
        <div className="Title flex flex-col items-start justify-start pb-5 pt-10 desktop:pb-8">
          <h3 className="Heading w-full text-2xl font-bold leading-7 text-primary-900 dark:text-primary-50 tablet:text-3xl desktop:text-4xl">
            Color Palette
          </h3>
        </div>
        <div className="Column flex w-full flex-col items-center justify-start gap-y-10 tablet:flex-row tablet:flex-wrap tablet:justify-between">
          {colors.map((color) => (
            <AnimateOnScroll
              key={color.name}
              scale={0.9}
              className="w-full tablet:w-fit"
            >
              <div className="Color flex w-full items-start justify-start">
                <div className="Container inline-flex flex-1 flex-col items-center justify-start space-y-9">
                  <div
                    style={{
                      backgroundColor: color.code,
                    }}
                    className="RectangleCopy shadow-1 h-28 w-full rounded-3xl tablet:h-[160px] tablet:w-[200px] desktop:h-[200px] desktop:w-[280px]"
                  />
                  <div className="Text flex flex-col items-center justify-start space-y-1">
                    <p className="text text-center text-xl font-bold text-gray-900 dark:text-gray-50">
                      {color.name}
                    </p>
                    <p className="text-center text-lg text-gray-700 dark:text-gray-300">
                      {color.code}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const WorkDone = ({ work }: { work: WorkDone[] }) => {
  return (
    <AnimateOnScroll scale={0.9} y={20} className="w-full">
      <div className="ColorPalette flex flex-col items-start justify-start space-y-6 pt-2 laptop:pt-9">
        <div className="Title flex flex-col items-start justify-start pb-5 pt-10 desktop:pb-8">
          <h3 className="Heading w-full text-2xl font-bold leading-7 text-primary-900 dark:text-primary-50 tablet:text-3xl desktop:text-4xl">
            Work Done
          </h3>
        </div>
        <div className="Column flex w-full flex-col items-center justify-start gap-y-6 tablet:flex-row tablet:flex-wrap tablet:items-stretch tablet:justify-between">
          {work.map((task) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const IconComponent = Icons[task.iconName];
            return (
              <AnimateOnScroll key={task.title} className="w-full tablet:w-fit">
                <div className="flex h-full w-full flex-col items-center justify-start gap-y-7 rounded-xl bg-light-2 px-2 py-10 dark:bg-dark-1 tablet:px-6 desktop:rounded-3xl">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-4 border-primary-50 bg-primary-100 px-2 pb-2 pt-1.5 dark:border-2 dark:border-primary-200 dark:bg-transparent">
                    {IconComponent && (
                      <IconComponent className="h-[35px] w-[35px] text-primary-600 dark:text-primary-300" />
                    )}
                  </div>
                  <div className="flex w-full flex-col items-center justify-start gap-y-3">
                    <p className="w-full text-center text-xl font-bold text-gray-900 dark:text-gray-50">
                      {task.title}
                    </p>
                    <p className="max-w-[300px] text-center text-base font-semibold text-gray-600 dark:text-gray-300">
                      {task.text}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </AnimateOnScroll>
  );
};

const Client = ({ client }: { client: ProjectReview }) => {
  return (
    <AnimateOnScroll scale={0.9} y={20} className="w-full">
      <section>
        <div className="Title flex flex-col items-start justify-start pb-10 pt-10 desktop:pb-12">
          <h3 className="Heading w-full text-2xl font-bold leading-7 text-primary-900 dark:text-primary-50 tablet:text-3xl desktop:text-4xl">
            Client
          </h3>
        </div>
        <AnimateOnScroll scale={0.9} y={20} className="w-full">
          <div className="Card relative inline-flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl bg-primary-200/90 px-5 py-4 tablet:gap-8 tablet:rounded-[32px] tablet:px-6 tablet:py-7 laptop:px-8">
            <ImQuotesLeft className="Icon absolute left-5 top-5 text-[28px] text-secondary-800 tablet:left-[50px] tablet:top-[50px] tablet:text-[40px] laptop:text-[48px]" />
            <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full shadow tablet:h-[180px] tablet:w-[180px] laptop:h-[220px] laptop:w-[220px]">
              <Image
                alt="testimonial image"
                className="Image object-cover"
                src={client.image}
                fill
                sizes="(max-width: 639px) 200px, (max-width: 1023px) 180px, 220px"
              />
            </div>
            <div className="Text flex w-full flex-col items-center justify-start gap-4 pb-6 tablet:gap-9 tablet:py-2">
              <div className="flex w-full flex-col items-center justify-start gap-3 tablet:gap-5 tablet:px-3 laptop:gap-6">
                <p className="relative w-full text-center text-xl font-bold leading-7 text-gray-900 tablet:text-[28px] tablet:leading-8 laptop:text-[32px] laptop:leading-[48px]">
                  <ImQuotesLeft className="mb-6 mr-1 inline-block text-[10px] tablet:text-[12px] laptop:text-[14px]" />
                  {client.text}
                  <ImQuotesRight className="mb-6 ml-1 inline-block text-[10px] tablet:text-[12px] laptop:text-[14px]" />
                </p>
                <p className="text-center text-lg leading-normal text-gray-800 tablet:text-2xl tablet:leading-7">
                  {client.name}
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </AnimateOnScroll>
  );
};

const ShowCase = ({ project: { showcase, review } }: { project: Project }) => {
  return (
    <>
      <AnimateOnScroll scale={0.9} y={20} className="w-full">
        <div className="Title flex flex-col items-start justify-start pb-5 pt-10">
          <h3 className="Heading w-full text-2xl font-bold leading-7 text-primary-900 dark:text-primary-50 tablet:text-3xl desktop:text-4xl">
            Introduction
          </h3>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll scale={0.9} y={20} className="w-full">
        <div className="Content">
          <p className="Paragraph w-full text-base text-gray-700 dark:text-gray-300 tablet:text-lg tablet:leading-6 laptop:max-w-[800px] desktop:text-xl">
            {showcase.intro}
          </p>
        </div>
      </AnimateOnScroll>
      <ImageGrid
        images={showcase.images.slice(0, 3)}
        caption="Images from unsplash"
      />
      <AnimateOnScroll scale={0.9} y={20} className="w-full">
        <div className="Title flex flex-col items-start justify-start pb-5 pt-10">
          <h3 className="Heading w-full text-2xl font-bold leading-7 text-primary-900 dark:text-primary-50 tablet:text-3xl desktop:text-4xl">
            Challenges
          </h3>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll scale={0.9} y={20} className="w-full">
        <ul className="List flex list-disc flex-col items-start justify-start gap-2 pl-4">
          {showcase.challenges.map((challenge) => (
            <li
              key={challenge}
              className="ListItem w-full text-base leading-7 text-gray-700 dark:text-gray-300 tablet:text-lg laptop:max-w-[800px] desktop:text-xl"
            >
              {challenge}
            </li>
          ))}
        </ul>
      </AnimateOnScroll>
      <ImageGrid
        images={showcase.images.slice(3, 6)}
        caption="Images from unsplash"
      />
      <AnimateOnScroll scale={0.9} y={20} className="w-full">
        <div className="Title flex flex-col items-start justify-start pb-5 pt-10">
          <h3 className="Heading w-full text-2xl font-bold leading-7 text-primary-900 dark:text-primary-50 tablet:text-3xl desktop:text-4xl">
            Solution
          </h3>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll scale={0.9} y={20} className="w-full">
        <div className="Content">
          <p className="Paragraph w-full text-base text-gray-700 dark:text-gray-300 tablet:text-lg tablet:leading-6 laptop:max-w-[800px] desktop:text-xl">
            {showcase.solution}
          </p>
        </div>
      </AnimateOnScroll>
      <ImageGrid
        images={showcase.images.slice(6, 9)}
        caption="Images from unsplash"
      />
      <WorkDone work={showcase.workDone} />
      <ColorPalette colors={showcase.colors} />
      {review ? (
        <div
          className="mt-4 desktop:mt-8
        "
        >
          <Client client={review} />
        </div>
      ) : null}
    </>
  );
};

const NextProject = ({ project }: { project: Project }) => {
  // find project index in the sortedProjects array and get the next project
  const projectIndex = sortedProjects.findIndex(
    (sortedProject) => sortedProject.slug === project.slug
  );

  const nextProject = sortedProjects[projectIndex - 1];

  return (
    <>
      {nextProject ? (
        <>
          <div className="Title flex flex-col items-start justify-start pb-5 pt-10">
            <h3 className="Heading w-full text-2xl font-bold leading-7 text-primary-900 dark:text-primary-50 tablet:text-3xl desktop:text-4xl">
              Next Project
            </h3>
          </div>
          <ProjectCard project={nextProject} />
        </>
      ) : (
        <>
          <div className="Title flex flex-col items-start justify-start pb-5 pt-10">
            <h3 className="Heading w-full text-2xl font-bold leading-7 text-primary-900 dark:text-primary-50 tablet:text-3xl desktop:text-4xl">
              See Also
            </h3>
          </div>
          <ProjectCard project={featuredProjects[0]} />
        </>
      )}
    </>
  );
};

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="project-details content my-7 flex flex-col gap-5 px-4 tablet:gap-9 tablet:px-[140px] tablet:py-12 laptop:px-[184px] laptop:py-16">
      <Overview overview={project.overview} />
      <div>
        <ShowCase project={project} />
      </div>
      <NextProject project={project} />
    </div>
  );
}
