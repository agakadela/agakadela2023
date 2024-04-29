import { IoIosArrowDown } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

export default function Search() {
  return (
    <div className="Search flex flex-col justify-start gap-4 rounded-2xl bg-gradient-to-r from-primary-700/40 to-secondary-500/40 p-3 dark:from-primary-700/50 dark:to-secondary-500/50 tablet:flex-row tablet:p-4">
      <div className="Searchbox flex w-full items-center justify-start gap-2 rounded-xl bg-gray-50 px-4 py-3 tablet:px-5 tablet:py-4">
        <div className="Icon flex h-full flex-col items-center justify-center px-1 pb-0.5">
          <FiSearch className=" h-4 w-4 text-gray-600 tablet:h-5 tablet:w-5" />
        </div>
        <input
          type="text"
          className="border-none bg-transparent text-base font-normal leading-5 text-gray-800 outline-none placeholder:text-gray-600 tablet:text-xl tablet:font-medium tablet:leading-[26px]"
          placeholder="Search for a Post"
        />
      </div>
      <div className="Dropdown flex w-full items-center justify-between space-x-1 rounded-xl border-2 border-gray-100 px-4 py-3 text-gray-700 dark:text-gray-200 tablet:px-5 tablet:py-4 laptop:w-[220px] laptop:justify-start">
        <p className="Exploreby genre w-40 text-base font-normal leading-5 tablet:text-xl tablet:font-medium tablet:leading-[26px]">
          Find by Category
        </p>
        <IoIosArrowDown className="CaretDown h-3.5 w-3.5 tablet:h-4 tablet:w-4" />
      </div>
    </div>
  );
}
