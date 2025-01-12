import type { Metadata } from 'next';
import { Noto_Sans, Noto_Sans_Mono } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import { AutoDetectUpdateDialog } from '@/components/auto-detect-update-dialog';
import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import { ScrollProgress } from '@/components/layouts/scroll-progress';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

const notoMono = Noto_Sans_Mono({
  variable: '--font-noto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | 摄影',
    default: '摄影',
  },
  description:
    '我们是一群来自旧金山的摄影师，专注于艺术、人像和自然风光摄影。我们热爱通过自然光和中画幅胶片捕捉生活中的细腻瞬间，尤其喜爱拍摄拥有独特魅力的红发和雀斑的模特。',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={cn(notoSans.variable, notoMono.variable, 'antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {props.children}
          <Footer />
          <ScrollProgress />
          <Toaster richColors />
          <AutoDetectUpdateDialog />
        </ThemeProvider>
      </body>
    </html>
  );
}
