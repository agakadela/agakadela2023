import HeroContent from '@/components/Hero/HeroContent';
import HeroImage from '@/components/Hero/HeroImage';

const Hero = () => {
  return (
    <div className="hero tablet:px-[140px] laptop:px-[184px]">
      <div className="flex flex-col-reverse items-center justify-between gap-5 px-4 py-7 tablet:py-12 desktop:flex-row desktop:px-0 desktop:py-16">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
