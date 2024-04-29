import AnimateOnScroll from '@/components/animation/AnimateOnScroll';
import Link from 'next/link';

type CtaProps = {
  variant?: 'default' | 'email';
  title: string;
  description: string;
};

const Cta = ({ variant = 'default', title, description }: CtaProps) => {
  return (
    <section className="CTA inline-flex w-full flex-col items-start justify-center bg-gradient-to-br from-primary-700/80 to-secondary-500/80 px-4 py-7 dark:from-primary-900/50 dark:to-secondary-900/50 tablet:px-[140px] tablet:py-12 laptop:px-[184px] laptop:py-16">
      <AnimateOnScroll
        y={20}
        duration={0.6}
        threshold={0.7}
        scale={0.95}
        className="w-full"
      >
        <div className="Content flex w-full flex-col items-center justify-start gap-6 overflow-hidden rounded-3xl bg-secondary-100 px-5 py-8 shadow-xl tablet:gap-8 tablet:px-16 tablet:py-16">
          <div className="Text flex w-full flex-col items-center justify-start gap-5 laptop:max-w-[760px]">
            <p className="Heading w-full text-center text-2xl font-bold leading-7 text-gray-900 tablet:text-4xl tablet:leading-[48px]">
              {title}
            </p>
            <p className="Text w-full text-center text-sm font-normal text-gray-700 tablet:text-xl">
              {description}
            </p>
          </div>
          {variant === 'default' ? (
            <div className="Actions inline-flex w-full  justify-center gap-3">
              <a
                href="#contact"
                className="Button flex items-center justify-center rounded-lg bg-secondary-700 px-3.5 py-2.5 shadow transition-colors duration-300 ease-out hover:bg-secondary-800 dark:bg-primary-700 dark:hover:bg-primary-800 tablet:px-5 tablet:py-3"
              >
                <p className="Text text-sm font-medium text-white">
                  Start a Project
                </p>
              </a>
              <Link
                href="/portfolio"
                className="Button flex items-center justify-center rounded-lg border-2 border-secondary-700 px-3.5 py-2.5 text-secondary-900 transition-colors duration-300 ease-out hover:border-secondary-800 hover:text-secondary-800 dark:border-primary-700 dark:text-primary-900 dark:hover:border-primary-800 dark:hover:text-primary-800 tablet:px-5 tablet:py-3"
              >
                <p className="Text text-sm font-medium tablet:leading-5">
                  Explore my Art
                </p>
              </Link>
            </div>
          ) : null}
          {variant === 'email' ? (
            <div className="Email flex w-full flex-col items-center gap-4 tablet:w-auto tablet:flex-row tablet:items-start tablet:justify-center tablet:gap-4">
              <input
                aria-label="write your email"
                placeholder="Write your email"
                type="email"
                id="cta_newsletter_email"
                className="Input flex w-full items-center justify-start rounded-xl border border-secondary-300 bg-white px-3.5 py-2.5 text-sm leading-5 text-gray-800 placeholder-gray-600 shadow transition-all duration-300 ease-out placeholder:text-gray-600 focus:border-secondary-400 focus:shadow-secondary-400/80 focus:outline-none focus:ring-2 tablet:w-[360px] tablet:text-base tablet:leading-normal"
              />
              <button className="Button flex w-full items-center justify-center rounded-xl border border-primary-600 bg-primary-600 px-3 py-2.5 shadow transition-colors duration-300 ease-out hover:bg-primary-700 tablet:w-auto 940:px-4">
                <p className="Text text-sm font-bold leading-5 text-gray-50 tablet:leading-normal 940:text-base">
                  Subscribe
                </p>
              </button>
            </div>
          ) : null}
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Cta;
