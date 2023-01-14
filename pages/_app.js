import '../styles/globals.scss';
import '../styles/general.scss';

import MainLayout from '../src/components/layout/main-layout.component';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
