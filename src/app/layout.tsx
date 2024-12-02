import Provider from '@/providers/SessionProvider';
import Layout from './containers/Layout';

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Provider>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}
