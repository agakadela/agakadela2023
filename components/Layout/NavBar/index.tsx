'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { ModeToggle } from '@/components/global/ModeToggle';
import MobileNavMenu from '@/components/Layout/NavBar/MobileNavMenu';
import DesktopNavMenu from '@/components/Layout/NavBar/DesktopNavMenu';

export default function NavBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar flex h-16 items-center tablet:h-20 laptop:h-[100px]"
    >
      <div className="navbar--content flex w-full items-center justify-between px-4 tablet:px-[140px] laptop:px-[184px]">
        <Link className="z-[1]" href="/">
          <Image
            src="/images/logo_mini.png"
            alt="logo"
            width={60}
            height={60}
          />
        </Link>
        <div className="hidden laptop:block">
          <DesktopNavMenu />
        </div>
        <div className="icons z-[1] flex items-center justify-start gap-4 laptop:gap-5">
          <ModeToggle />

          <div className="laptop:hidden">
            <MobileNavMenu />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
