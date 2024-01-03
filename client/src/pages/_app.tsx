import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '@/layouts/root-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/context/theme-context';

const montserrat = Montserrat({
  subsets: ['latin'],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
