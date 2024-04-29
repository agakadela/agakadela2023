'use client';

/* eslint-disable react/display-name */
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';

const NavigationMenuItem = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NavigationMenu.Item>
      <Link href={href} passHref legacyBehavior>
        <NavigationMenu.Link
          className={cn(
            'block select-none border-b-2 border-transparent text-[18px] font-normal leading-6 text-gray-700 no-underline outline-none transition-all duration-300 ease-out hover:rounded-none hover:text-primary-700 focus:border-b-2 focus:border-gray-500 dark:text-gray-300 dark:hover:text-primary-500 dark:focus:border-dark-3'
          )}
        >
          {children}
        </NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};

const DesktopNavMenu = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex justify-center">
      <NavigationMenu.List className="center m-0 flex list-none gap-5">
        <NavigationMenuItem href="/">Home</NavigationMenuItem>
        <NavigationMenuItem href="/#projects">Projects</NavigationMenuItem>
        <NavigationMenuItem href="/blog">Blog</NavigationMenuItem>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex justify-center">
        <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] overflow-hidden rounded-[6px] transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn" />
      </div>
    </NavigationMenu.Root>
  );
};

export default DesktopNavMenu;
