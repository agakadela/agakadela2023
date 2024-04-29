/* eslint-disable @typescript-eslint/no-var-requires */
// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      800: '800px',

      940: '940px',

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#ffffff',
      primary: colors.fuchsia,
      secondary: colors.violet,
      gray: colors.gray,
      light: {
        0: '#FAFAFA',
        1: '#F4F4F5',
        2: '#E4E4E7',
        3: '#D4D4D8',
      },
      dark: {
        0: '#18181B',
        1: '#27272A',
        2: '#3F3F46',
        3: '#52525B',
      },
    },

    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)', ...fontFamily.sans],
        lora: ['var(--font-lora)', ...fontFamily.sans],
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: 'translateX(200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: 'translateX(-200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 200ms ease',
        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease',
        enterFromLeft: 'enterFromLeft 250ms ease',
        enterFromRight: 'enterFromRight 250ms ease',
        exitToLeft: 'exitToLeft 250ms ease',
        exitToRight: 'exitToRight 250ms ease',
      },
      dropShadow: {
        1: '4px 12px 40px rgba(31, 41, 55, 0.25)',
      },
    },
  },
  plugins: [],
};
