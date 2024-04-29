'use client';

import { useState, Fragment } from 'react';
import FAQBlock from '@/components/FAQ/FAQBlock';
import { faqs } from '@/data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="flex flex-col gap-y-2.5 bg-transparent px-2 py-7 tablet:gap-y-4 tablet:px-10 tablet:py-12 laptop:gap-y-5 laptop:px-[72px] laptop:py-16">
      {faqs.map((faq, index) => (
        <Fragment key={faq.question}>
          <FAQBlock
            faq={faq}
            isOpen={index === openIndex}
            toggleOpen={() => toggleOpen(index)}
          />
          {index < faqs.length - 1 && (
            <div className="h-[1px] w-full bg-gray-300 dark:bg-dark-2" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
