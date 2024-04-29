import HeadingText from '@/components/HeadingText';
import ServicesCard from '@/components/Services/ServicesCard';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';

import { featuredServices } from '@/data/services';

const Services = () => {
  return (
    <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.8}>
      <section className="Services flex flex-col gap-6 px-4 py-7 tablet:gap-9 tablet:px-[140px] tablet:py-12 laptop:gap-16 laptop:px-[184px] laptop:py-16">
        {/* <HeadingText title="Services" link="/services" cta="See All Services" /> */}
        <HeadingText title="Services" />
        <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.8}>
          <div className="flex flex-col gap-6 tablet:gap-9 940:grid 940:grid-cols-2 940:items-stretch 940:gap-x-5 940:gap-y-9 laptop:flex laptop:flex-col laptop:gap-y-14">
            {featuredServices.map((service, index) => (
              <ServicesCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </section>
    </AnimateOnScroll>
  );
};

export default Services;
