import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseCircleFill, RiAddCircleFill } from 'react-icons/ri';
import { cn } from '@/lib/utils';
import { Faq } from '@/data/faq';

type FAQBlockProps = {
  faq: Faq;
  isOpen?: boolean;
  toggleOpen: () => void;
};

export default function FAQBlock({
  faq,
  isOpen = false,
  toggleOpen,
}: FAQBlockProps) {
  const { question, answer } = faq;

  return (
    <div
      className={cn(
        'Surface inline-flex w-full items-start justify-start rounded-2xl px-2 py-6 tablet:rounded-[40px] tablet:px-[100px] tablet:py-[52px] laptop:px-[112px]',
        !isOpen ? 'bg-transparent' : 'bg-secondary-100 dark:bg-dark-1'
      )}
    >
      <div className="Content inline-flex flex-1 flex-col items-start justify-start gap-y-6 px-2 tablet:px-0">
        <div className="Header inline-flex w-full items-start justify-start gap-x-2 tablet:gap-x-8">
          <div className="Title #BlockTitle flex-1 text-2xl font-semibold leading-7 text-gray-900 dark:text-gray-50 tablet:text-3xl/9 tablet:font-bold laptop:text-[32px]/[48px]">
            <p>{question}</p>
          </div>
          <button onClick={toggleOpen}>
            {isOpen ? (
              <RiCloseCircleFill className="h-7 w-7 text-black dark:text-white tablet:h-10 tablet:w-10 laptop:h-12 laptop:w-12" />
            ) : (
              <RiAddCircleFill className="h-7 w-7 text-black dark:text-white tablet:h-10 tablet:w-10 laptop:h-12 laptop:w-12" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              key="text"
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{
                height: 'auto',
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-base leading-normal text-gray-700 dark:text-gray-300 tablet:text-lg/6 laptop:max-w-[840px] laptop:text-xl">
                {answer}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
