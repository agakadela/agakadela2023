'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { motion, useAnimationControls } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="laptop:h-[38px] laptop:w-[38px]" />;

  return (
    <div className="flex items-center">
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="p-3"
        aria-label="Toggle theme"
      >
        {theme === 'dark' || !theme ? (
          <RiMoonClearLine className="text-[20px] text-gray-300 tablet:text-[22px] laptop:text-secondary-50" />
        ) : (
          <RiSunLine className="text-[20px] text-gray-700 tablet:text-[22px] laptop:text-secondary-900" />
        )}
      </button>
    </div>
  );
}
