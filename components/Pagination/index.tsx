import { cn } from '@/lib/utils';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';

type PaginationProps = {
  page: number;
  total: number;
  onNext?: () => void;
  onPrev?: () => void;
};

const Pagination = ({ page, total, onNext, onPrev }: PaginationProps) => {
  // const startPage = Math.max(1, page - 2);
  // const endPage = Math.min(total, startPage + 4);

  return (
    <div className="flex items-center justify-between border-t border-primary-200 px-6 py-3 font-lora">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className={cn(
          'Button inline-flex items-center justify-center gap-1.5 rounded-md bg-secondary-100 px-2.5 py-[8px] text-secondary-800 transition-colors duration-200 ease-out hover:bg-primary-100 tablet:px-3 laptop:gap-2 laptop:px-4 laptop:py-2.5',
          page === 1 && 'cursor-not-allowed opacity-70'
        )}
      >
        <HiOutlineArrowLeft className="h-3 w-3 pt-[1px] tablet:h-[14px] tablet:w-[14px] tablet:pt-[2px] laptop:h-4 laptop:w-4" />
        <p className="text-center text-xs font-medium tracking-wider tablet:text-sm tablet:font-semibold ">
          Prev
        </p>
      </button>
      <p className="Details text-xs font-medium text-secondary-900 dark:text-secondary-100 tablet:text-sm tablet:font-semibold">
        Page {page} of {total}
      </p>
      <button
        onClick={onNext}
        disabled={page === total}
        className={cn(
          'Button inline-flex items-center justify-center gap-1.5 rounded-md bg-secondary-100 px-2.5 py-[8px] text-secondary-800 transition-colors duration-200 ease-out hover:bg-primary-100 tablet:px-3 laptop:gap-2 laptop:px-4 laptop:py-2.5',
          page === total && 'cursor-not-allowed opacity-70'
        )}
      >
        <p className="Next text-center text-xs font-medium tracking-wider tablet:text-sm tablet:font-semibold">
          Next
        </p>
        <HiOutlineArrowRight className="h-3 w-3 pt-[1px] tablet:h-[14px] tablet:w-[14px] tablet:pt-[2px] laptop:h-4 laptop:w-4" />
      </button>
    </div>
  );
};

export default Pagination;
