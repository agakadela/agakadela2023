'use client';

import { useRouter } from 'next/navigation';
import { RiArrowLeftUpLine } from 'react-icons/ri';

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="Button flex items-center justify-center gap-x-2 px-3 py-2 text-gray-800 transition-colors duration-300 ease-out hover:text-primary-700 dark:text-gray-100 dark:hover:text-gray-400 tablet:py-4"
    >
      <p className="Text text-xl font-medium tablet:text-2xl laptop:text-3xl">
        Go Back
      </p>
      <RiArrowLeftUpLine className="h-6 w-6 tablet:h-7 tablet:w-7 laptop:h-9 laptop:w-9" />
    </button>
  );
}
