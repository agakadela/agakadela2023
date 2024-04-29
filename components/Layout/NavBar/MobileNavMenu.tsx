'use client';

import { Fragment, useState, useEffect, MouseEventHandler } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { RiMenuFill } from 'react-icons/ri';
import { IoMdClose, IoMdAdd } from 'react-icons/io';
import { TbArrowRight } from 'react-icons/tb';

import { cn } from '@/lib/utils';
import { ModeToggle } from '../../global/ModeToggle';
import Image from 'next/image';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Contact',
    sublinks: [
      { label: 'Email', href: 'mailto: aga.kadela.dev@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/agakadela' },
      { label: 'GitHub', href: 'https://github.com/agakadela' },
      { label: 'X', href: 'https://twitter.com/agakadela' },
    ],
  },
];

const Logo = () => (
  <Link href="/" className="logo flex items-center justify-start gap-[10px]">
    <Image src="/images/logo_mini.png" alt="logo" width={60} height={60} />
  </Link>
);

const MenuIcon = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button onClick={onClick} className="p-2" aria-label="Toggle mobile menu">
    <RiMenuFill className="text-[20px] tablet:text-[22px]" />
  </button>
);

const CloseIcon = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    onClick={onClick}
    className="p-2 text-secondary-900 dark:text-secondary-50"
  >
    <IoMdClose className="text-[20px] tablet:text-[22px]" />
  </button>
);

type MenuItemProps = {
  item: {
    href?: string;
    label: string;
  };
  isActive?: boolean;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};
const MenuItem = ({ item, isActive, onClick }: MenuItemProps) => (
  <div
    className={cn(
      'w-full text-2xl leading-7 text-gray-800 dark:text-gray-100 tablet:text-[28px] tablet:leading-9',
      isActive && 'text-primary-800 dark:text-secondary-300'
    )}
  >
    {item.href ? (
      <Link
        href={item.href}
        onClick={onClick}
        className="flex w-full cursor-pointer items-center justify-between gap-[10px] p-5"
      >
        {item.label}
        {!isActive ? (
          <TbArrowRight className="cursor-pointer text-2xl tablet:text-3xl" />
        ) : null}
      </Link>
    ) : (
      item.label
    )}
  </div>
);

type SubLinkProps = {
  sublink: {
    href: string;
    label: string;
  };
  isActive?: boolean;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};
const SubLink = ({ sublink, isActive, onClick }: SubLinkProps) => (
  <div
    className={cn(
      'px-4 py-3 text-[18px] leading-7 text-gray-700 dark:text-gray-200 tablet:px-5 tablet:text-xl tablet:leading-8',
      isActive && 'text-primary-800 dark:text-secondary-300'
    )}
  >
    <Link
      onClick={onClick}
      href={sublink.href}
      className="flex w-full cursor-pointer items-center justify-between"
    >
      {sublink.label}
      {!isActive ? (
        <TbArrowRight className="text-[18px] leading-7 tablet:text-[22px]" />
      ) : null}
    </Link>
  </div>
);

const MobileNavMenu = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(true);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleSubMenuToggle = () => setSubMenuOpen(!subMenuOpen);

  const menuVariants: Variants = {
    initial: { opacity: 0, y: '-10%', scale: 0.9 },
    animate: {
      opacity: 1,
      y: '0%',
      scale: 1,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      y: '-10%',
      scale: 0.9,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  const subMenuVariants: Variants = {
    initial: { opacity: 0, height: 0, y: '-10%', scale: 0.9 },
    animate: {
      opacity: 1,
      height: 'auto',
      y: '0%',
      scale: 1,
      transition: { duration: 0.2, ease: 'easeInOut', staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: '-10%',
      scale: 0.9,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  return (
    <div>
      <MenuIcon onClick={handleMenuToggle} />
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-50 h-screen w-screen bg-white text-black dark:bg-dark-0"
          >
            <div className="navbar flex h-16 items-center tablet:h-20">
              <div className="navbar--content flex w-full items-center justify-between px-4 tablet:px-[140px]">
                <Logo />
                <div className="icons flex items-center justify-start gap-4">
                  <ModeToggle />
                  <div className="laptop:hidden">
                    <CloseIcon onClick={handleMenuToggle} />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                maxHeight: 'calc(100vh - 116px)',
                overflowY: 'scroll',
              }}
              className="mobile-menu-container flex flex-col items-center justify-start gap-8 px-4 pt-8 tablet:px-[140px]"
            >
              <nav className="flex w-full flex-col items-start gap-3 pb-12 tablet:pb-16">
                {menuItems.map((item, index) => {
                  const isActive = item.href === pathname;

                  return (
                    <Fragment key={index}>
                      {index > 0 && (
                        <div className="h-[1px] w-full bg-gray-300 dark:bg-gray-600" />
                      )}
                      {item.sublinks ? (
                        <div className="flex w-full flex-col gap-7 p-5">
                          <div className="flex w-full cursor-pointer items-center justify-between gap-[10px] text-2xl leading-7 text-gray-800 dark:text-gray-100 tablet:text-[28px] tablet:leading-9">
                            <div>{item.label}</div>
                            <button onClick={handleSubMenuToggle}>
                              <span className="text-2xl leading-7 tablet:text-3xl">
                                {subMenuOpen ? <IoMdClose /> : <IoMdAdd />}
                              </span>
                            </button>
                          </div>
                          <AnimatePresence>
                            {subMenuOpen && (
                              <motion.div
                                variants={subMenuVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="w-full rounded-[10px] bg-secondary-100 py-3 dark:bg-dark-2 tablet:py-4"
                              >
                                {item.sublinks.map((sublink) => {
                                  const isActive = pathname === sublink.href;

                                  return (
                                    <SubLink
                                      key={sublink.label}
                                      sublink={sublink}
                                      isActive={isActive}
                                      onClick={handleMenuToggle}
                                    />
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <MenuItem
                          item={item}
                          isActive={isActive}
                          onClick={handleMenuToggle}
                        />
                      )}
                    </Fragment>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavMenu;
