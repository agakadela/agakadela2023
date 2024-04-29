import React from 'react';

export default function Footer() {
  return (
    <footer className="p-2 tablet:p-3 laptop:p-5">
      <div className="flex flex-col items-center justify-start rounded-2xl bg-light-1 px-4 py-7 dark:bg-dark-1/40 dark:bg-blend-multiply tablet:rounded-3xl tablet:px-[124px] tablet:py-12 laptop:flex-col laptop:px-[164px] laptop:py-16 desktop:rounded-[48px]">
        <p className="Footertext  text-center text-sm font-normal leading-[18px] text-gray-700 dark:text-gray-300  tablet:text-center tablet:text-base 800:text-start">
          Aga Kadela © All rights reserved.
        </p>
      </div>
    </footer>
  );
}
