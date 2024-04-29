import '../styles/globals.css';
import { Nunito, Lora } from 'next/font/google';
import { ThemeProvider } from '@/components/global/ThemeProvider';
import { Analytics } from '@/components/global/Analytics';

import NavBar from '@/components/Layout/NavBar';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${nunito.variable} ${lora.variable} m-0 p-0 font-nunito`}
      >
        <ThemeProvider>
          <div className="min-h-screen w-full overflow-x-hidden text-gray-900 antialiased dark:text-gray-50">
            <NavBar />
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
