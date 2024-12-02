import SessionProvider from '@/providers/SessionProvider';
import ThemeProvider from '@/providers/ThemeProvider';

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
          <SessionProvider>
            <Layout>{children}</Layout>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
