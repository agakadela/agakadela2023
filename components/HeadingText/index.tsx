import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

type HeadingTextProps = {
  title: string;
  link?: string;
  cta?: string;
};

const HeadingText = ({ title, link, cta }: HeadingTextProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-x-2.5 text-primary-900 dark:text-primary-50">
      <h2 className="FeaturedProjects text-2xl font-bold leading-7 tablet:text-3xl laptop:text-4xl laptop:leading-10 ">
        {title}
      </h2>
      {link ? (
        <Link
          href={link}
          className="Button hidden h-full items-center justify-center space-x-4 rounded-2xl transition-colors duration-300 ease-out hover:text-primary-700 dark:hover:text-primary-300 tablet:flex"
        >
          <p className="SeeAll Projects text-center font-lora text-base font-semibold leading-7 tracking-wider laptop:text-lg laptop:leading-loose">
            {cta}
          </p>
          <RiArrowRightLine className="mt-[3px] text-xl laptop:text-2xl" />
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};

export default HeadingText;
