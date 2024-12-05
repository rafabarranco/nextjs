import SessionProvider from '@/app/providers/SessionProvider';
import ThemeProvider from '@/app/providers/ThemeProvider';
import ReactQueryProvider from '@/app/providers/ReactQueryProvider';

import Layout from './containers/Layout';

import './globals.css';

export const metadata = {
  title: 'Rafael Barranco Vela - Next.js',
  description: 'Side project built in NextJS by Rafael Barranco Vela.',
};

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ReactQueryProvider>
            <SessionProvider>
              <Layout>{children}</Layout>
            </SessionProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
