import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineDribbble,
  AiFillGithub,
} from 'react-icons/ai';
import HeadingText from '@/components/HeadingText';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';
import Link from 'next/link';

const Contact = () => {
  return (
    <AnimateOnScroll noScale y={40} duration={0.8} threshold={0.4}>
      <section
        id="contact"
        className="flex flex-col gap-6 px-4 pb-12 pt-7 tablet:gap-9 tablet:px-[140px] tablet:pb-[96px] tablet:pt-12 laptop:gap-14 laptop:px-[184px] laptop:pt-16"
      >
        <HeadingText title="Contact Me" />
        <AnimateOnScroll noScale y={40} duration={0.8} threshold={0.4}>
          <div className="ContactForm inline-flex w-full flex-col items-center justify-center gap-7 laptop:flex-row laptop:items-stretch">
            <div className="Content flex w-full flex-col items-center justify-center gap-11 rounded-3xl bg-gradient-to-bl from-primary-100 to-secondary-100 px-6 py-8 dark:bg-gradient-to-br dark:from-primary-700 dark:to-secondary-500 tablet:gap-16">
              <div className="Headingand contact details flex w-full flex-col items-center justify-center gap-9 tablet:gap-16">
                <div className="Headingand supporting text flex w-full flex-col items-center justify-center gap-4">
                  <p className="Heading w-full text-center text-xl font-bold leading-7 text-gray-900 dark:text-gray-50 tablet:text-[28px] tablet:leading-8">
                    Say Hello!
                  </p>
                  <p className="Supportingtext w-full max-w-[460px] text-center text-base font-semibold leading-6 text-gray-600 dark:text-gray-300 tablet:text-lg tablet:leading-6">
                    Interested in working together or just have a question?
                    Let&apos;s connect and make things happen.
                  </p>
                </div>
                <div className="Content inline-flex w-full items-start justify-center gap-8">
                  <div className="Content inline-flex flex-1 flex-col items-center justify-start space-y-2 laptop:gap-4">
                    <div className="Textand supporting text w-full">
                      <p className="Text w-full text-center text-lg font-medium text-gray-900 dark:text-gray-100 tablet:text-xl tablet:font-semibold tablet:leading-7">
                        Email
                      </p>
                    </div>
                    <p className="Text text-center text-sm font-medium text-primary-700 dark:text-primary-300 tablet:text-base tablet:font-semibold laptop:text-start">
                      <a href="mailto:aga.kadela.dev@gmail.com">
                        aga.kadela.dev@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Sociallinks inline-flex w-full items-center justify-center gap-8">
                <Link href="https://twitter.com/agakadela" target="_blank">
                  <AiOutlineTwitter className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 tablet:h-6 tablet:w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/agakadela/"
                  target="_blank"
                >
                  <AiFillLinkedin className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 tablet:h-6 tablet:w-6" />
                </Link>
                <AiFillGithub className="h-5 w-5 cursor-pointer text-gray-600 transition-colors duration-300 ease-out hover:text-gray-500 dark:text-gray-300  dark:hover:text-gray-400 tablet:h-6 tablet:w-6" />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </AnimateOnScroll>
  );
};

export default Contact;
