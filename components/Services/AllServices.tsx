import ServicesCard from '@/components/Services/ServicesCard';

import { allServices } from '@/data/services';

const AllServices = () => {
  return (
    <section className="AllServices relative flex flex-col items-start justify-start gap-6 px-4 py-7 tablet:gap-9 tablet:px-[140px] tablet:py-12 laptop:gap-14 laptop:px-[184px] laptop:py-16">
      <div className="flex w-full flex-col gap-6 tablet:gap-9 940:grid 940:grid-cols-2 940:items-stretch 940:gap-x-5 940:gap-y-9 laptop:flex laptop:flex-col laptop:gap-y-14">
        {allServices.map((service, index) => (
          <ServicesCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AllServices;
