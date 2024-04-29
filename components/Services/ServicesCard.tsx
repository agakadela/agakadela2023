import Image from 'next/image';
import { RiCheckboxCircleLine } from 'react-icons/ri';

import { cn } from '@/lib/utils';

import AnimateOnScroll from '@/components/animation/AnimateOnScroll';
import { Service } from '@/data/services';

type ServicesCardProps = {
  service: Service;
  index?: number;
};

const ServicesCard = ({ service, index }: ServicesCardProps) => {
  return (
    <div
      className={cn(
        'ServiceLayout flex w-full flex-col items-start justify-start gap-3 rounded-[20px] tablet:gap-0 tablet:rounded-[28px] 940:w-fit laptop:w-full laptop:items-stretch laptop:gap-5',
        index && index % 2 === 1 ? 'laptop:flex-row-reverse' : 'laptop:flex-row'
      )}
    >
      <AnimateOnScroll
        threshold={0}
        scale={0.9}
        duration={0.6}
        delay={0.2}
        x={index && index % 2 === 1 ? '20%' : '-20%'}
        y={20}
        className="w-full 940:h-full desktop:w-5/12"
      >
        <div className="Service card-shadow flex w-full flex-col items-start justify-between gap-4 rounded-3xl px-2 py-4 tablet:px-4 tablet:pb-3 940:h-full laptop:p-4">
          <div className="Text flex w-full flex-col items-start justify-start gap-3 px-5 py-3 tablet:gap-4 tablet:px-6 tablet:py-4">
            <p className="CustomIllustration w-full text-2xl font-bold leading-7 text-gray-50 tablet:text-3xl">
              {service.title}
            </p>
            <p className="w-full text-base font-semibold text-gray-200 tablet:max-w-[320px] tablet:text-lg tablet:leading-6">
              {service.subtitle}
            </p>
            <a
              href="#contact"
              className="Button inline-flex items-center justify-center rounded-lg border border-primary-50 bg-primary-50 px-3 py-2 text-primary-700 transition-colors duration-300 ease-out hover:bg-primary-100 hover:text-primary-900 tablet:px-5 tablet:py-3"
            >
              <p className="Text text-sm font-medium tablet:text-base">
                Hire Me
              </p>
            </a>
          </div>
          <div className="ImageContainer inline-flex w-full items-start justify-start rounded-3xl bg-gradient-to-bl from-primary-100 to-secondary-100 p-2.5">
            <div className="shadow-1 relative h-[400px] w-full overflow-hidden rounded-2xl laptop:h-[480px]">
              <Image
                alt="project image"
                className="absolute left-0 top-0 cursor-pointer object-cover transition-all duration-300 ease-out hover:scale-105"
                src={service.image}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
              />
            </div>
          </div>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll
        duration={0.6}
        threshold={0.1}
        delay={0.4}
        scale={0.9}
        x={index && index % 2 === 1 ? '-20%' : '20%'}
        y={30}
        className="w-full desktop:w-7/12"
      >
        <div className="Details hidden h-full w-full flex-col items-center justify-start gap-4 rounded-3xl bg-gradient-to-br from-secondary-200 from-10% via-primary-200 via-30% to-secondary-200 to-90% px-3 py-3 dark:bg-primary-200/90 dark:bg-none tablet:px-6 tablet:py-7 laptop:flex laptop:items-center laptop:justify-between laptop:px-6 laptop:py-8">
          {service.steps.map((step) => (
            <div
              key={step.id}
              className="ListItem inline-flex w-full items-start justify-start space-x-2.5 rounded-2xl bg-secondary-50 px-5 py-4 shadow-lg shadow-primary-900/20 dark:bg-gray-100 tablet:w-auto"
            >
              <div className="Icon flex items-start justify-start pt-0.5">
                <RiCheckboxCircleLine className="CheckCircle h-4 w-4 text-primary-700 tablet:h-5 tablet:w-5 desktop:h-[22px] desktop:w-[22px]" />
              </div>
              <p className="flex-1 text-lg font-semibold leading-6 text-gray-800 tablet:text-xl tablet:font-bold">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default ServicesCard;
